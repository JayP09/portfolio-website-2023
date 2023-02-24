import { BackendSkillType } from '@/types'

export const fetchBackendSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBackendSkills`
  )

  const data = await res.json()
  const backendSkills: BackendSkillType[] = data.backendSkills

  return backendSkills
}
