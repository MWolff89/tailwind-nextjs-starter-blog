import { PineconeClient } from '@pinecone-database/pinecone'
import { queryPineconeVectorStore } from './utils'

export async function getContext(query: string, index: string) {
  const client = new PineconeClient()
  const apiKey = [
    'yoga-mandala',
    'lava-yoga',
    'union-yoga',
    'yoga-plus',
    'kalidass-law',
    'rex-legal',
    'minmed',
    'jcp-law',
    'irb-law',
    'ensoul-clinic',
    'farallon-law',
    'regal-law',
    'joo-toon-llc',
    'yuen-law',
    'gjc-law',
    'wmh-law',
    'godwin-campos-llc',
  ].includes(index)
    ? process.env.PINECONE_API_KEY_BLACKORCHID
    : process.env.PINECONE_API_KEY
  await client.init({
    apiKey: apiKey || '',
    environment: process.env.PINECONE_ENVIRONMENT || '',
  })

  const text = await queryPineconeVectorStore(client, index, query)

  return text
}
