import Head from 'next/head'
import About from '../components/about/About'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'
import Skills from '../components/skills/Skills'
import Qualification from '../components/qualification/Qualification'
import Project from '../components/projects/Project'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Scrollup from '../components/scrollup/Scrollup'

export default function Home() {
  return (
    <div className='font-poppins text-base'>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="bg-bodyColor text-textColor">
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
        <Scrollup />
      </main>
    </div>
  )
}
