import { ProjectCategoryType } from '@/types'

export const fetchProjectCategory = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectCategory`
  )

  const data = await res.json()
  const projectCategory: ProjectCategoryType[] = data.projectCategory

  return projectCategory
}
