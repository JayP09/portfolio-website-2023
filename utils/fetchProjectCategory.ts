import { ProjectCategoryType } from '@/types'
import { groq } from 'next-sanity'

export const fetchProjectCategory = async () => {
  const query = groq`*[_type == "projectCategory"] | order(_createdAt desc ) {
    _id,
    _type,
    tag
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const projectCategory: ProjectCategoryType[] = data.result

  return projectCategory
}
