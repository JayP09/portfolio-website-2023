import { ExperienceType } from '@/types'

export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  )

  const data = await res.json()
  const experiences: ExperienceType[] = data.experiences
  return experiences
}
