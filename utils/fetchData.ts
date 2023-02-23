import {
  FrontendSkill,
  BackendSkill,
  PageInfo,
  Education,
  Experience,
  Project,
  ProjectCategory,
  Social,
} from '@/types'

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

  const data = await res.json()
  const pageInfo: PageInfo = data.pageInfo

  return pageInfo
}

export const fetchEducation = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
  )

  const data = await res.json()
  const education: Education[] = data.education

  return education
}

export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  )

  const data = await res.json()
  const experiences: Experience[] = data.experiences

  return experiences
}

export const fetchFrontendSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFrontendSkills`
  )

  const data = await res.json()
  const frontendSkills: FrontendSkill[] = data.frontendSkills

  return frontendSkills
}

export const fetchBackendSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBackendSkills`
  )

  const data = await res.json()
  const backendSkills: BackendSkill[] = data.backendSkills

  return backendSkills
}

export const fetchProjectsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectsData`
  )

  const data = await res.json()
  const projectsData: Project[] = data.projectsData

  return projectsData
}

export const fetchProjectCategory = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectCategory`
  )

  const data = await res.json()
  const projectCategory: ProjectCategory[] = data.projectCategory

  return projectCategory
}

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

  const data = await res.json()
  const socials: Social[] = data.socials

  return socials
}
