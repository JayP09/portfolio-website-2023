import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { projectsData, projectNav } from './Data'
import ProjectsItems from './ProjectItems'

const Projects = () => {
  const [item, setItem] = useState({name: "all"})
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

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

  const handleChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: React.SetStateAction<number>) => {
    setActive(index)
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setItem({name: (e.target as HTMLElement).textContent })
    }, 500);
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
      <motion.div 
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        viewport={{once: true}}
        className="flex flex-row flex-wrap gap-4 justify-center sectionContainer"
      >
        {projects.map((project) => {
          return <ProjectsItems project={project} key={project.id}/>
        })}
      </motion.div>
    </>
  )
}

export default Projects