import React from 'react'
import Frontend from './Frontend'
import Backend from "./Backend"

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubtitle">
        My technical level
      </span>
      <div className="skills_container grid-cols-1 md:grid-cols-[repeat(2,350px)] gap-y-8 lg:gap-y-0 lg:gap-x-12 justify-center sectionContainer gridContainer">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills