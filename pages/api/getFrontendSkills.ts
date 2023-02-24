import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { FrontendSkillType } from '@/types'

const query = groq`*[_type == "frontendSkill"] {
  _id,
  _type,
  title,
  skillLevel
}`

type Data = {
  frontendSkills: FrontendSkillType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const frontendSkills: FrontendSkillType[] = await sanityClient.fetch(query)
  res.status(200).json({ frontendSkills })
}
