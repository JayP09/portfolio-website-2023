import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ProjectCategory } from '@/types'

const query = groq`*[_type == "projectCategory"] | order(_createdAt desc )`

type Data = {
  projectCategory: ProjectCategory[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projectCategory: ProjectCategory[] = await sanityClient.fetch(query)
  res.status(200).json({ projectCategory })
}
