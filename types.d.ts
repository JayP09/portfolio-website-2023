export interface PageInfoType {
  _id: string
  _type: 'pageInfo'
  backgroundInformation: string
  calendlyUrl: string
  email: string
  name: string
  profilePicURL: string
  resumeURL: string
  role: string
}

export interface EducationType {
  _id: string
  _type: 'education'
  name: string
  percentage: number
  universityName: string
  yearStarted: string
  yearEnded: string
}

export interface ExperienceType {
  _id: string
  _type: 'education'
  jobTitle: string
  companyName: string
  dateStarted: string
  dateEnded: string
}

export interface ProjectCategoryType {
  _id: string
  _type: 'projectCategory'
  tag: string
}

export interface ProjectType {
  _id: string
  _type: 'project'
  title: string
  projectImage: string
  linkToBuild: string
  linkToGithub: string
  summary: string
  tags: projectCategory[]
}

export interface FrontendSkillType {
  _id: string
  _type: 'frontendSkill'
  title: string
  skillLevel: string
}

export interface BackendSkillType {
  _id: string
  _type: 'backendSkill'
  skillLevel: string
  title: string
}

export interface SocialType {
  _id: string
  _type: 'social'
  title: string
  url: string
}
