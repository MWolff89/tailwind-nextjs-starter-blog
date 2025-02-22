import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

// AI
import { OpenAI } from 'langchain/llms/openai'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { Index, RecordMetadata } from '@pinecone-database/pinecone'
// import { loadQAStuffChain } from 'langchain/chains'
// import { Document } from 'langchain/document'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string

export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const updatePinecone = async (client: any, indexName: string, docs: any[]) => {
  console.log('Retrieving Pinecone index...')
  // 1. Retrieve Pinecone index
  const index = client.Index(indexName)
  // 2. Log the retrieved index name
  console.log(`Pinecone index retrieved: ${indexName}`)
  // 3. Process each document in the docs array
  for (const doc of docs) {
    console.log(`Processing document: ${doc.metadata.source}`)
    const txtPath = doc.metadata.source
    const text = doc.pageContent
    // 4. Create RecursiveCharacterTextSplitter instance
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
    })
    console.log('Splitting text into chunks...')
    // 5. Split text into chunks (documents)
    const chunks = await textSplitter.createDocuments([text])
    console.log(`Text split into ${chunks.length} chunks`)
    console.log(
      `Calling OpenAI's Embedding endpoint documents with ${chunks.length} text chunks ...`
    )
    // 6. Create OpenAI embeddings for documents
    const embeddingsArrays = await new OpenAIEmbeddings().embedDocuments(
      chunks.map((chunk: any) => chunk.pageContent.replace(/\n/g, ' '))
    )
    console.log('Finished embedding documents')
    console.log(`Creating ${chunks.length} vectors array with id, values, and metadata...`)
    // 7. Create and upsert vectors in batches of 100
    const batchSize = 100
    let batch: any = []
    for (let idx = 0; idx < chunks.length; idx++) {
      const chunk = chunks[idx]
      const vector = {
        id: `${txtPath}_${idx}`,
        values: embeddingsArrays[idx],
        metadata: {
          ...chunk.metadata,
          loc: JSON.stringify(chunk.metadata.loc),
          pageContent: chunk.pageContent,
          txtPath: txtPath,
        },
      }
      batch = [...batch, vector]
      // When batch is full or it's the last item, upsert the vectors
      if (batch.length === batchSize || idx === chunks.length - 1) {
        await index.upsert({
          upsertRequest: {
            vectors: batch,
          },
        })
        // Empty the batch
        batch = []
      }
    }
    // 8. Log the number of vectors updated
    console.log(`Pinecone index updated with ${chunks.length} vectors`)
  }
}

export const queryPineconeVectorStore = async (index: Index<RecordMetadata>, question: string) => {
  // 1. Start query process
  console.log('Querying Pinecone vector store...')
  // 2. Retrieve the Pinecone index
  // const index = client.Index(indexName)
  // 3. Create query embedding
  const queryEmbedding = await new OpenAIEmbeddings().embedQuery(question)
  // 4. Query Pinecone index and return top 10 matches
  let queryResponse = await index.query({
    // queryRequest: {
    topK: 10,
    vector: queryEmbedding,
    includeMetadata: true,
    includeValues: true,
    // },
  })
  // 5. Log the number of matches
  console.log(`Found ${queryResponse.matches.length} matches...`)
  // 6. Log the question being asked
  console.log(`Asking question: ${question}...`)
  if (queryResponse.matches.length) {
    // 7. Extract and concatenate page content from matched documents
    const concatenatedPageContent = queryResponse.matches
      .map((match: any) => match.metadata.pageContent)
      .join(' ')

    // console.log('Concatenated Page Content =>\n\n' + concatenatedPageContent)

    return concatenatedPageContent
    // // 7. Create an OpenAI instance and load the QAStuffChain
    // const llm = new OpenAI({});
    // const chain = loadQAStuffChain(llm);
    // // 8. Extract and concatenate page content from matched documents
    // const concatenatedPageContent = queryResponse.matches
    //   .map((match:any) => match.metadata.pageContent)
    //   .join(" ");
    // // 9. Execute the chain with input documents and question
    // const result = await chain.call({
    //   input_documents: [new Document({ pageContent: concatenatedPageContent })],
    //   question: question,
    // });
    // // 10. Log the answer
    // console.log(`Answer: ${result.text}`);
    // return result.text
  } else {
    // 11. Log that there are no matches, so GPT-3 will not be queried
    console.log('Since there are no matches, GPT-3 will not be queried.')
    return ''
  }
}
