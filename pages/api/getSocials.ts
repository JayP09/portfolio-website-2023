import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { SocialType } from '@/types'

const query = groq`*[_type == "social"] {
  _id,
  _type,
  title,
  url
}`

type Data = {
  socials: SocialType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: SocialType[] = await sanityClient.fetch(query)
  res.status(200).json({ socials })
}
