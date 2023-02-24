import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ExperienceType } from '@/types'

const query = groq`*[_type == "experience"] {
  _id,
  _type,
  companyName,
  jobTitle,
  dateStarted,
  dateEnded
}`

type Data = {
  experiences: ExperienceType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: ExperienceType[] = await sanityClient.fetch(query)
  res.status(200).json({ experiences })
}
