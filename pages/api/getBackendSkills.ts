import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { BackendSkillType } from '@/types'

const query = groq`*[_type == "backendSkill"]`

type Data = {
  backendSkills: BackendSkillType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const backendSkills: BackendSkillType[] = await sanityClient.fetch(query)
  res.status(200).json({ backendSkills })
}
