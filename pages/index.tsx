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
import {
  BackendSkill,
  Education,
  Experience,
  FrontendSkill,
  PageInfo,
  ProjectCategory,
  Project as ProjectInterface,
  Social,
} from '@/types'
import { GetStaticProps } from 'next'
import {
  fetchBackendSkills,
  fetchEducation,
  fetchExperience,
  fetchFrontendSkills,
  fetchPageInfo,
  fetchProjectCategory,
  fetchProjectsData,
  fetchSocial,
} from '@/utils/fetchData'
import { AppContext } from '@/context/context'

type Props = {
  pageInfo: PageInfo
  education: Education[]
  experience: Experience[]
  frontendSkills: FrontendSkill[]
  backendSkills: BackendSkill[]
  projectsData: ProjectInterface[]
  projectCategory: ProjectCategory[]
  socials: Social[]
}

export default function Home({
  pageInfo,
  education,
  experience,
  frontendSkills,
  backendSkills,
  projectsData,
  projectCategory,
  socials,
}: Props) {
  const [showLoading, setShowLoading] = useState(true)

  return (
    <AppContext.Provider
      value={{
        pageInfo,
        education,
        experience,
        frontendSkills,
        backendSkills,
        projectsData,
        projectCategory,
        socials,
      }}
    >
      <div className="font-poppins text-base">
        <div className={showLoading ? 'flex' : 'hidden'}>
          <LoadingScreen setShowLoading={setShowLoading} />
        </div>
        <main
          className={`${
            showLoading ? 'hidden' : 'block'
          } bg-bodyColor text-textColor`}
        >
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
    </AppContext.Provider>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const education: Education[] = await fetchEducation()
  const experience: Experience[] = await fetchExperience()
  const frontendSkills: FrontendSkill[] = await fetchFrontendSkills()
  const backendSkills: BackendSkill[] = await fetchBackendSkills()
  const projectsData: ProjectInterface[] = await fetchProjectsData()
  const projectCategory: ProjectCategory[] = await fetchProjectCategory()
  const socials: Social[] = await fetchSocial()

  return {
    props: {
      pageInfo,
      education,
      experience,
      frontendSkills,
      backendSkills,
      projectsData,
      projectCategory,
      socials,
    },
    revalidate: 10,
  }
}
