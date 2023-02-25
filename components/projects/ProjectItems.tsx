import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { UilLink, UilGithub } from '@iconscout/react-unicons'

const ProjectItems = ({ project }) => {
  return (
    <div
      className="bg-containerColor border-[1px] border-solid border-[rgba(0,0,0,0.1)] p-4 lg:p-5 rounded-2xl"
      key={project._id}
    >
      <div className="w-72 h-48 mb-3 lg:mb-4 flex justify-center items-center relative">
        <Image
          src={project.projectImage}
          alt={project.title}
          width={288}
          height={192}
          className="rounded-2xl object-cover"
        />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: 'easeInOut',
            staggerChildren: 0.5,
          }}
          className="absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 w-full h-full bg-titleColor/70 rounded-lg opacity-0 transition-[all_0.3s_ease] gap-3"
        >
          <motion.a
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="flex justify-center items-center text-titleColor w-14 h-14 bg-white p-2 m-4 rounded-full"
            href={project.linkToBuild}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} Live Demo`}
          >
            <UilLink />
          </motion.a>
          <motion.a
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            href={project.linkToGithub}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-titleColor w-14 h-14 bg-white p-2 m-4 rounded-full"
            aria-label={`${project.title} Github link`}
          >
            <UilGithub />
          </motion.a>
        </motion.div>
      </div>
      <h3 className="text-base text-center font-medium mb-2 lg:mb-3">
        {project.title}
      </h3>
      <p className="group text-textColor text-sm flex items-center gap-x-1">
        {project.summary.slice(0, 38) + '...'}
      </p>
    </div>
  )
}

export default ProjectItems
