import React from 'react'
import { motion } from 'framer-motion';
import Projects from './Projects'

const Project = () => {
  return (
    <section className="section min-h-screen sectionContainer" id="portfolio">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        viewport={{once: true}}
      >
        <h2 className="sectionTitle">Projects</h2>
        <span className="sectionSubtitle">Most recent works</span>
      </motion.div>
      <Projects />
    </section>
  )
}

export default Project