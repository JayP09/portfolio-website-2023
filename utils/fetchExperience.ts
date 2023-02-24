import { ExperienceType } from '@/types'
import { groq } from 'next-sanity'

export const fetchExperience = async () => {
  const query = groq`*[_type == "experience"] {
    _id,
    _type,
    companyName,
    jobTitle,
    dateStarted,
    dateEnded
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const experiences: ExperienceType[] = data.result
  return experiences
}
