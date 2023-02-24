import {
  FrontendSkillType,
  BackendSkillType,
  PageInfoType,
  EducationType,
  ExperienceType,
  ProjectType,
  ProjectCategoryType,
  SocialType,
} from '@/types'

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

  const data = await res.json()
  const pageInfo: PageInfoType = data.pageInfo

  return pageInfo
}

export const fetchEducation = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
  )

  const data = await res.json()
  const education: EducationType[] = data.education

  return education
}

export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  )

  const data = await res.json()
  const experiences: ExperienceType[] = data.experiences

  return experiences
}

export const fetchFrontendSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getFrontendSkills`
  )

  const data = await res.json()
  const frontendSkills: FrontendSkillType[] = data.frontendSkills

  return frontendSkills
}

export const fetchBackendSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBackendSkills`
  )

  const data = await res.json()
  const backendSkills: BackendSkillType[] = data.backendSkills

  return backendSkills
}

export const fetchProjectsData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectsData`
  )

  const data = await res.json()
  const projectsData: ProjectType[] = data.projectsData

  return projectsData
}

export const fetchProjectCategory = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectCategory`
  )

  const data = await res.json()
  const projectCategory: ProjectCategoryType[] = data.projectCategory

  return projectCategory
}

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

  const data = await res.json()
  const socials: SocialType[] = data.socials

  return socials
}
