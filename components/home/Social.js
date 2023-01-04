import React from 'react'
import { UilGithubAlt,UilTwitterAlt, UilLinkedinAlt  } from '@iconscout/react-unicons'

const Social = () => {
  return (
    <div className="grid auto-cols-max gap-y-4">
      <a href='https://github.com/JayP09' className="socialIcon" target="_blank">
        <UilGithubAlt />
      </a>
      <a href='https://twitter.com/JayPTwts' className="socialIcon" target="_blank">
        <UilTwitterAlt />
      </a>
      <a href='https://www.linkedin.com/in/jaypanchal09/' className="socialIcon" target="_blank">
        <UilLinkedinAlt />
      </a>
    </div>
  )
}

export default Social