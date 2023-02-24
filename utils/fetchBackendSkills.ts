import { BackendSkillType } from '@/types'
import { groq } from 'next-sanity'

export const fetchBackendSkills = async () => {
  const query = groq`*[_type == "backendSkill"] {
    _id,
    _type,
    title,
    skillLevel
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const backendSkills: BackendSkillType[] = data.result

  return backendSkills
}
