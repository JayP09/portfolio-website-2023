import React, { useState, useEffect } from 'react'
import { projectsData, projectNav } from './Data'
import ProjectsItems from './ProjectItems'

const Projects = () => {
  const [item, setItem] = useState({name: "all"})
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if(item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
      })
      setProjects(newProjects)
    }
  }, [item]);

  const handleChange = (e, index) => {
    setItem({name: e.target.textContent })
    setActive(index)
  }

  return (
    <>
       <div className="flex justify-center items-center gap-x-2 sm:gap-x-3 mb-8">
        {projectNav.map((item,index) => {
          return (
            <span 
              onClick={(e) => {
                handleChange(e, index);
              }}
              className={`${active === index ? 'bg-titleColor text-containerColor' : ""} projectItem`} 
              key={index}
            >
              {item.name}
            </span>
          )
        })}
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center sectionContainer ">
        {projects.map((project) => {
          return <ProjectsItems project={project} key={project.id}/>
        })}
      </div>
    </>
  )
}

export default Projects