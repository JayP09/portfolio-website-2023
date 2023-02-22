import React from 'react'

const Info = () => {
  return (
    <div className='max-[350px]:grid-cols-2 grid-cols-3 sm:grid-cols-[repeat(3,140px)] gap-2 mb-8 justify-center lg:justify-start gridContainer'>
      <div className="aboutBox">
        <i className='aboutIcon bx bx-award'></i>
        <h3 className="aboutTitle">Experience</h3>
        <span className='aboutSubtitle'>6 Months</span>
      </div>
      <div className="aboutBox">
        <i className='aboutIcon bx bx-briefcase-alt' ></i>
        <h3 className="aboutTitle">Completed</h3>
        <span className='aboutSubtitle'>5+ projects</span>
      </div>
      <div className="aboutBox">
        <i className='aboutIcon bx bx-support' ></i>
        <h3 className="aboutTitle">Support</h3>
        <span className='aboutSubtitle'>Online 24/7</span>
      </div>
    </div>
  )
}

export default Info