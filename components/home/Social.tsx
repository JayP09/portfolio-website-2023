import React from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '@/context/context'
import { getHomeSocialIcon } from '@/utils/extraUtils'

const Social = () => {
  const { socials } = useAppContext()
  return (
    <div className="grid auto-cols-max gap-y-4">
      {socials.map((social) => (
        <motion.a
          key={social._id}
          href={social.url}
          className="socialIcon"
          target="_blank"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 2.25,
          }}
          viewport={{ once: true }}
          aria-label={`${social.ariaLabel}`}
        >
          {getHomeSocialIcon(social.title)}
        </motion.a>
      ))}
    </div>
  )
}

export default Social
