import { createContext, useContext } from 'react'
import {
  BackendSkill,
  Education,
  Experience,
  FrontendSkill,
  PageInfo,
  ProjectCategory,
  Project as ProjectInterface,
  Social,
} from '@/types'

type AppContext = {
  pageInfo: PageInfo
  education: Education[]
  experience: Experience[]
  frontendSkills: FrontendSkill[]
  backendSkills: BackendSkill[]
  projectsData: ProjectInterface[]
  projectCategory: ProjectCategory[]
  socials: Social[]
}

export const AppContext = createContext<AppContext | null>(null)

export const useAppContext = () => {
  return useContext(AppContext)
}
