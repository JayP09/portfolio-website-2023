import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ProjectCategoryType } from '@/types'

const query = groq`*[_type == "projectCategory"] | order(_createdAt desc ) {
  _id,
  _type,
  tag
}`

type Data = {
  projectCategory: ProjectCategoryType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projectCategory: ProjectCategoryType[] = await sanityClient.fetch(query)
  res.status(200).json({ projectCategory })
}
