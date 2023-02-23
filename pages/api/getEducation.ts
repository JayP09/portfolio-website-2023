import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Education } from '@/types'

const query = groq`*[_type == "education"]`

type Data = {
  education: Education[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const education: Education[] = await sanityClient.fetch(query)
  res.status(200).json({ education })
}
