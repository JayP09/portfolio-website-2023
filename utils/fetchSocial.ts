import { SocialType } from '@/types'
import { groq } from 'next-sanity'

export const fetchSocial = async () => {
  const query = groq`*[_type == "social"] {
    _id,
    _type,
    title,
    url
  }`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${query}`)

  const data = await res.json()
  const socials: SocialType[] = data.result

  return socials
}
