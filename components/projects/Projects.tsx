import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projectsData, projectNav } from './Data'
import ProjectsItems from './ProjectItems'
import { useAppContext } from '@/context/context'

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState('')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  const { projectsData, projectCategory } = useAppContext()

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
      setActive(projectCategory[0]._id)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.tags[0].tag.toLowerCase() === item.name
      })
      setProjects(newProjects)
    }
  }, [item, projectCategory, projectsData])

  const handleChange = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: React.SetStateAction<string>
  ) => {
    setActive(index)
    setAnimateCard({ y: 100, opacity: 0 })

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })
      setItem({ name: (e.target as HTMLElement).textContent })
    }, 500)
  }

  return (
    <>
      <div className="flex justify-center items-center gap-x-2 sm:gap-x-3 mb-8">
        {projectCategory.map((item) => {
          return (
            <span
              onClick={(e) => {
                handleChange(e, item._id)
              }}
              className={`${
                active === item._id ? 'bg-titleColor text-containerColor' : ''
              } projectItem`}
              key={item._id}
            >
              {item.tag}
            </span>
          )
        })}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-row flex-wrap gap-4 justify-center sectionContainer"
      >
        {projects.map((project) => {
          return <ProjectsItems project={project} key={project._id} />
        })}
      </motion.div>
    </>
  )
}

export default Projects
