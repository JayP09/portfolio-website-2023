import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { EducationType } from '@/types'

const query = groq`*[_type == "education"]`

type Data = {
  education: EducationType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const education: EducationType[] = await sanityClient.fetch(query)
  res.status(200).json({ education })
}
