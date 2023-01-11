import React from 'react'
import { motion } from 'framer-motion';
import Frontend from './Frontend'
import Backend from "./Backend"

const Skills = () => {
  return (
    <section className="section" id="skills">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        viewport={{once: true}}
      >
        <h2 className="sectionTitle">Skills</h2>
        <span className="sectionSubtitle">
          My technical level
        </span>
      </motion.div>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        viewport={{once: true}}
        className="skills_container grid-cols-1 md:grid-cols-[repeat(2,350px)] gap-y-8 lg:gap-y-0 lg:gap-x-12 justify-center sectionContainer gridContainer"
      >
        <Frontend />
        <Backend />
      </motion.div>
    </section>
  )
}

export default Skills