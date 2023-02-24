import { EducationType } from '@/types'
import { groq } from 'next-sanity'

export const fetchEducation = async () => {
  const query = groq`*[_type == "education"] {
    _id,
    _type,
    name,
    percentage,
    universityName,
    yearStarted,
    yearEnded,
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const education: EducationType[] = data.result
  return education
}
