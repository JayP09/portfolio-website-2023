import React from 'react'
import { motion } from 'framer-motion'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

const HeroSection = () => {
  return (
    <section
      className="section h-screen md:h-auto max-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="justify-center md:gap-y-28 mx-4 lg:max-w-5xl lg:mx-auto w-auto gridContainer">
        <div className="gridContainer grid-cols-[0.5fr_3fr] md:grid-cols-[100px_repeat(2,1fr)] lg:grid-cols-[116px_repeat(2,1fr)] pt-0 md:pt-24 gap-x-5 lg:gap-x-16 items-center">
          <Social />
          <motion.div
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
              delay: 2.25
            }}
            viewport={{ once: true }}
            className="profilePic"
          ></motion.div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default HeroSection
