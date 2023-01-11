import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import { UilEye } from '@iconscout/react-unicons'


const ProjectItems = ({project}) => {
  return (
    <div className='bg-containerColor border-[1px] border-solid border-[rgba(0,0,0,0.1)] p-4 lg:p-5 rounded-2xl' key={project.id}>
      <div className="w-72 h-48 mb-3 lg:mb-4 flex justify-center items-center relative" >
        <Image src={project.image} alt={project.title} className='rounded-2xl object-cover' />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
          className="absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 w-full h-full bg-titleColor/70 rounded-lg opacity-0 transition-[all_0.3s_ease] gap-3"
        >
          <a href={project.link} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="flex justify-center items-center text-titleColor bg-white m-4 rounded-full"
            >
              <UilEye className="h-10 w-10" />
            </motion.div>
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.90] }}
              transition={{ duration: 0.25 }}
              className="flex justify-center items-center text-titleColor bg-white m-4 rounded-lg"
            >
              <i className='bx bxl-github text-4xl'></i>
            </motion.div>
          </a>
        </motion.div>
      </div>
      
      <h3 className="text-base text-center font-medium mb-2 lg:mb-3">
        {project.title}
      </h3>
      <p className="group text-textColor text-sm flex items-center gap-x-1">
        {project.description.slice(0,38)+"..."}
      </p>
    </div>
  )
}

export default ProjectItems