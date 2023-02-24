import { ProjectType } from '@/types'
import { groq } from 'next-sanity'

export const fetchProjectsData = async () => {
  const query = groq`*[_type == "project"] | order( _updatedAt desc) {
    _id,
    _type,
    title,
    "projectImage": image.asset -> url,
    summary,
    linkToBuild,
    linkToGithub,
    tags[] ->,
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const projectsData: ProjectType[] = data.result

  return projectsData
}
