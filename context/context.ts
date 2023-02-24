import { createContext, useContext } from 'react'
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

type AppContext = {
  pageInfo: PageInfoType
  education: EducationType[]
  experience: ExperienceType[]
  frontendSkills: FrontendSkillType[]
  backendSkills: BackendSkillType[]
  projectsData: ProjectType[]
  projectCategory: ProjectCategoryType[]
  socials: SocialType[]
}

export const AppContext = createContext<AppContext | null>(null)

export const useAppContext = () => {
  return useContext(AppContext)
}
