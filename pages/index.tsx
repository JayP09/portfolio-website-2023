import About from '../components/about/About'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'
import Skills from '../components/skills/Skills'
import Qualification from '../components/qualification/Qualification'
import Project from '../components/projects/Project'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import ScrollUp from '../components/scrollup/ScrollUp'
import React, { useState } from 'react'
import LoadingScreen from '../components/loadingscreen/LoadingScreen'

export default function Home() {
  const [showLoading, setShowLoading] = useState(true)

  return (
    <div className="font-poppins text-base">
      <div className={showLoading ? "flex" : "hidden"}>
        <LoadingScreen 
          showLoading={showLoading}
          setShowLoading={setShowLoading}
        />
      </div>
      <main className={`${showLoading ? "hidden" : "block"} bg-bodyColor text-textColor`}>
        {/* Header */}
        <Header />

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Eduaction and experience */}
        <Qualification />

        {/* Projects */}
        <Project />

        {/* Contact Me */}
        <Contact />

        {/* Footer */}
        <Footer />
        <ScrollUp />
      </main>
    </div>
  )
}
