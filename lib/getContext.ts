import { Pinecone } from '@pinecone-database/pinecone'
import { queryPineconeVectorStore } from './utils'

export async function getContext(query: string, indexStr: string) {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY || '' })
  console.log('pc: ', pc)
  const index = pc.index(indexStr)

  // console.log('XXXXXXXXXXXX \n INDEX => ', index)
  // const apiKey = [
  //   'yoga-mandala',
  //   'lava-yoga',
  //   'union-yoga',
  //   'yoga-plus',
  //   'kalidass-law',
  //   'rex-legal',
  //   'minmed',
  //   'jcp-law',
  //   'irb-law',
  //   'ensoul-clinic',
  //   'farallon-law',
  //   'regal-law',
  //   'joo-toon-llc',
  //   'yuen-law',
  //   'gjc-law',
  //   'wmh-law',
  //   'godwin-campos-llc',
  //   'tembusu-law',
  //   'write-connection',
  //   'cushmanwakefield',
  //   'ivre-sg',
  //   'foptics-club',
  //   'feisiong-group',
  //   'cartrack',
  //   'capital-hrm',
  //   'royal-t-group',
  //   'daikin',
  //   'zansan',
  //   'dasher-smart-home',
  //   'jo-artysan',
  //   'jhkim-taekwondo',
  //   'rn-care',
  //   'storhub-sg',
  //   'homage-sg',
  //   'yew-digital-lock',
  //   'greater-club',
  //   'mode-aesthetics',
  //   'absolutely-batter',
  // ].includes(indexStr)
  //   ? process.env.PINECONE_API_KEY_BLACKORCHID
  //   : process.env.PINECONE_API_KEY
  // await client.init({
  //   apiKey: apiKey || '',
  //   environment: process.env.PINECONE_ENVIRONMENT || '',
  // })

  const text = await queryPineconeVectorStore(index, query)

  // console.log('XXXXXXXXXX \n TEXT => ', text)

  return text
}
