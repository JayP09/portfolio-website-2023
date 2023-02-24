import { PageInfoType } from '@/types'
import { groq } from 'next-sanity'

export const fetchPageInfo = async () => {
  const query = groq`*[_type == "pageInfo"] [0] {
    _id,
    _type,
    name,
    backgroundInformation,
    calendlyUrl,
    email,
    role,
    "resumeURL": resume.asset -> url,
    "profilePicURL": profilePic.asset -> url
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const pageInfo: PageInfoType = data.result
  return pageInfo
}
