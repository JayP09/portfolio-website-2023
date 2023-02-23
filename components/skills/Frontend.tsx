import { useAppContext } from '@/context/context'
import React from 'react'

const Frontend = () => {
  const { frontendSkills } = useAppContext()

  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Frontend Developer</h3>
      <div className="skillsBox">
        <div className="skillsGroup">
          {frontendSkills.map((skill) => (
            <div className="skillsData" key={skill._id}>
              <i className="bx bx-badge-check skillsIcon"></i>
              <div>
                <h3 className="skillsName">{skill.title}</h3>
                <span className="skillsLevel">{skill.skillLevel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Frontend
