import React from 'react'

const Backend = () => {
  return (
    <div className='skillsContent'>
      <h3 className='skillsTitle'>Backend Developer</h3>
      <div className='skillsBox'>
        <div className='skillsGroup'>
          <div className='skillsData'>
            <i class='bx bx-badge-check skillsIcon'></i>
            <div>
              <h3 className="skillsName">Python</h3>
              <span className='skillsLevel'>Intermediate</span>
            </div>
          </div>
          

          <div className='skillsData'>
            <i class='bx bx-badge-check skillsIcon'></i>
            <div>
              <h3 className="skillsName">Firebase</h3>
              <span className='skillsLevel'>Basic</span>
            </div>
          </div>
          

        </div>
        <div className='skillsGroup'>
          <div className='skillsData'>
            <i class='bx bx-badge-check skillsIcon'></i>
            <div>
              <h3 className="skillsName">MongoDB</h3>
              <span className='skillsLevel'>Basic</span>
            </div>
          </div>
          

          <div className='skillsData'>
            <i class='bx bx-badge-check skillsIcon'></i>
            <div>
              <h3 className="skillsName">Node Js</h3>
              <span className='skillsLevel'>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend