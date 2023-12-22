import { PineconeClient } from "@pinecone-database/pinecone"
import { queryPineconeVectorStore } from "./utils"

export async function getContext(query: string, index: string) {
    const client = new PineconeClient()
    const apiKey = index === 'yoga-mandala' ? process.env.PINECONE_API_KEY_BLACKORCHID : process.env.PINECONE_API_KEY
    await client.init({
        apiKey: apiKey || '',
        environment: process.env.PINECONE_ENVIRONMENT || ''
    })

    const text = await queryPineconeVectorStore(client, index, query)

    return text
}