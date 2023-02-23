// All of the sanity Response tend to have the below sanity body type
interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface PageInfo extends SanityBody {
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
}

export interface Education extends SanityBody {
  _type: 'education'
  title: string
  name: string
  percentage: number
  universityName: string
  yearStarted: Date
  yearEnded: Date
}

export interface Experience extends SanityBody {
  _type: 'education'
  jobTitle: string
  companyName: string
  dateStarted: Date
  dateEnded: Date
}

export interface ProjectCategory extends SanityBody {
  _type: 'projectCategory'
  title: string
  tag: string
}

export interface Project extends SanityBody {
  _type: 'project'
  title: string
  image: Image
  linkToBuild: string
  linkToGithub: string
  summary: string
  tags: projectCategory
  technologies: (FrontendSkills | backendSkills)[]
}

export interface FrontendSkill extends SanityBody {
  _type: 'frontendSkill'
  title: string
  skillLevel: string
}

export interface BackendSkill extends SanityBody {
  _type: 'backendSkill'
  title: string
  skillLevel: string
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}
