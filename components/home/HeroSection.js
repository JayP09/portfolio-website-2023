import React from 'react'
import Social from './Social'
import Data from './Data'
import ProfilePic from "../../public/profile.jpg"
import ScrollDown from './ScrollDown'

const HeroSection = () => {
  return (
    <section 
      className='section h-screen md:h-auto max-h-screen flex items-center justify-center' 
      id="home"
    >
      <div className="justify-center md:gap-y-28 mx-4 lg:max-w-5xl lg:mx-auto w-auto gridContainer">
        <div className="gridContainer grid-cols-[0.5fr_3fr] md:grid-cols-[100px_repeat(2,1fr)] lg:grid-cols-[116px_repeat(2,1fr)] pt-0 md:pt-24 gap-x-5 lg:gap-x-16 items-center">
          <Social />
          <div 
            className="profilePic"
          >
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default HeroSection