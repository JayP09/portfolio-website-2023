import { ProjectType } from '@/types'

export const fetchProjectsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectsData`
  )

  const data = await res.json()
  const projectsData: ProjectType[] = data.projectsData

  return projectsData
}
