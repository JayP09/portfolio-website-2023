import { FrontendSkillType } from '@/types'

export const fetchFrontendSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFrontendSkills`
  )

  const data = await res.json()
  const frontendSkills: FrontendSkillType[] = data.frontendSkills

  return frontendSkills
}
