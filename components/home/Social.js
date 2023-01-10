import React from 'react'
import { UilGithubAlt,UilTwitterAlt, UilLinkedinAlt  } from '@iconscout/react-unicons'
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <div className="grid auto-cols-max gap-y-4">
      <motion.a 
        href='https://github.com/JayP09' 
        className="socialIcon" 
        target="_blank"
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate= {{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1
        }}
        viewport={{once: true}}
      >
        <UilGithubAlt />
      </motion.a>
      <motion.a 
        href='https://twitter.com/JayPTwts' 
        className="socialIcon" 
        target="_blank"
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate= {{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1
        }}
        viewport={{once: true}}
      >
        <UilTwitterAlt />
      </motion.a>
      <motion.a 
        href='https://www.linkedin.com/in/jaypanchal09/' 
        className="socialIcon" 
        target="_blank"
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate= {{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1
        }}
        viewport={{once: true}}
      >
        <UilLinkedinAlt />
      </motion.a>
    </div>
  )
}

export default Social