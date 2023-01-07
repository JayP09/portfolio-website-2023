import React from 'react'
import Projects from './Projects'

const Project = () => {
  return (
    <section className="section min-h-screen sectionContainer" id="portfolio">
      <h2 className="sectionTitle">Projects</h2>
      <span className="sectionSubtitle">Most recent works</span>
      <Projects />
    </section>
  )
}

export default Project