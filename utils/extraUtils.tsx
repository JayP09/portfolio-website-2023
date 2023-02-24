import {
  UilGithubAlt,
  UilTwitterAlt,
  UilLinkedinAlt,
} from '@iconscout/react-unicons'

export const getFooterSocialIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <i className="bx bxl-github"></i>
    case 'twitter':
      return <i className="bx bxl-twitter"></i>
    case 'linkedin':
      return <i className="bx bxl-linkedin-square"></i>
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
