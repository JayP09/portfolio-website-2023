import { SocialType } from '@/types'

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

  const data = await res.json()
  const socials: SocialType[] = data.socials

  return socials
}
