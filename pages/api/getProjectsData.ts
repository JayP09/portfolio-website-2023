import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { ProjectType } from '@/types'

const query = groq`*[_type == "project"] | order( _updatedAt desc) {...,tags[] ->,technologies[] ->}`

type Data = {
  projectsData: ProjectType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projectsData: ProjectType[] = await sanityClient.fetch(query)
  res.status(200).json({ projectsData })
}
