import { PineconeClient } from "@pinecone-database/pinecone"
import { queryPineconeVectorStore } from "./utils"

export async function getContext(query: string, index: string) {
    const client = new PineconeClient()
    await client.init({
        apiKey: process.env.PINECONE_API_KEY || '',
        environment: process.env.PINECONE_ENVIRONMENT || ''
    })

    const text = await queryPineconeVectorStore(client, index, query)

    return text
}