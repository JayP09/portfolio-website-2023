import {
  UilGithubAlt,
  UilTwitterAlt,
  UilLinkedinAlt,
  UilGithub,
  UilTwitter,
  UilLinkedin,
} from '@iconscout/react-unicons'

export const getFooterSocialIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <UilGithub />
    case 'twitter':
      return <UilTwitter />
    case 'linkedin':
      return <UilLinkedin />
    default:
      break
  }
}

export const getHomeSocialIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <UilGithubAlt />
    case 'twitter':
      return <UilTwitterAlt />
    case 'linkedin':
      return <UilLinkedinAlt />
    default:
      break
  }
}

export const getYearFromDate = (date: string) => {
  return date.slice(0, 4)
}

export const changeDateFormat = (date: string) => {
  return date.toString().split('-').reverse().join('/').slice(3)
}
