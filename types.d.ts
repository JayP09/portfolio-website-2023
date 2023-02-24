// All of the sanity Response tend to have the below sanity body type
interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface ImageType {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

interface PDFType {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface PageInfoType extends SanityBody {
  _type: 'pageInfo'
  title: string
  backgroundInformation: string
  email: string
  heroImage: Image
  name: string
  profilePic: Image
  role: string
  socials: Social[]
  calendlyUrl: string
  resume: PDF
  resumeURL: string
}

export interface EducationType extends SanityBody {
  _type: 'education'
  title: string
  name: string
  percentage: number
  universityName: string
  yearStarted: Date
  yearEnded: Date
}

export interface ExperienceType extends SanityBody {
  _type: 'education'
  jobTitle: string
  companyName: string
  dateStarted: Date
  dateEnded: Date
}

export interface ProjectCategoryType extends SanityBody {
  _type: 'projectCategory'
  title: string
  tag: string
}

export interface ProjectType extends SanityBody {
  _type: 'project'
  title: string
  image: Image
  linkToBuild: string
  linkToGithub: string
  summary: string
  tags: projectCategory
  technologies: (FrontendSkills | backendSkills)[]
}

export interface FrontendSkillType extends SanityBody {
  _type: 'frontendSkill'
  title: string
  skillLevel: string
}

export interface BackendSkillType extends SanityBody {
  _type: 'backendSkill'
  title: string
  skillLevel: string
}

export interface SocialType extends SanityBody {
  _type: 'social'
  title: string
  url: string
}
