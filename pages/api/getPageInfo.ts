import type { NextApiRequest, NextApiResponse } from 'next'
// groq for quering the sanity database
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { PageInfoType } from '@/types'

const query = groq`*[_type == "pageInfo"][0] {...,"resumeURL": resume.asset -> url}`

type Data = {
  pageInfo: PageInfoType
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfoType = await sanityClient.fetch(query)
  res.status(200).json({ pageInfo })
}
