import React from 'react'
import Image from 'next/image'


const ProjectItems = ({project}) => {
  return (
    <div className='bg-containerColor border-[1px] border-solid border-[rgba(0,0,0,0.1)] p-4 lg:p-5 rounded-2xl' key={project.id}>
      <div className="w-72 h-48 mb-3 lg:mb-4 flex justify-center items-center" >
        <Image src={project.image} alt="project Image" className='rounded-2xl' />
      </div>
      
      <h3 className="text-base font-medium mb-1 lg:mb-2">
        {project.title}
      </h3>
      <a href='#' className="group text-textColor text-sm flex items-center gap-x-1">
        Demo <i className='bx bx-right-arrow-alt text-base transition-[0.4s] group-hover:translate-x-1'></i>
      </a>
    </div>
  )
}

export default ProjectItems