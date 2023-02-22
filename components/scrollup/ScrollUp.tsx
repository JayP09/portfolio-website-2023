import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { UilArrowUp } from '@iconscout/react-unicons'

const ScrollUp = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0)

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      href="#"
      className={`fixed right-4 sm:right-6 lg:right-10 ${
        clientWindowHeight >= 560 ? 'bottom-16 md:bottom-12' : '-bottom-[20%]'
      } bg-titleColor opacity-80 p-1 md:p-2 rounded-md z-10 transition-[0.4s] hover:bg-titleColorDark`}
    >
      <UilArrowUp className="scrollupIcon text-xl lg:text-2xl text-containerColor" />
    </motion.a>
  )
}

export default ScrollUp
