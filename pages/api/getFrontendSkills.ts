import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { FrontendSkill } from '@/types'

const query = groq`*[_type == "frontendSkill"]`

type Data = {
  frontendSkills: FrontendSkill[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const frontendSkills: FrontendSkill[] = await sanityClient.fetch(query)
  res.status(200).json({ frontendSkills })
}
