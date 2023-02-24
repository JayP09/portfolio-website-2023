import { FrontendSkillType } from '@/types'
import { groq } from 'next-sanity'

export const fetchFrontendSkills = async () => {
  const query = groq`*[_type == "frontendSkill"] {
    _id,
    _type,
    title,
    skillLevel
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const frontendSkills: FrontendSkillType[] = data.result

  return frontendSkills
}
