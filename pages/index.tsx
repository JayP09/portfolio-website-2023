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
  FrontendSkillType,
  BackendSkillType,
  PageInfoType,
  EducationType,
  ExperienceType,
  ProjectType,
  ProjectCategoryType,
  SocialType,
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
  pageInfo: PageInfoType
  education: EducationType[]
  experience: ExperienceType[]
  frontendSkills: FrontendSkillType[]
  backendSkills: BackendSkillType[]
  projectsData: ProjectType[]
  projectCategory: ProjectCategoryType[]
  socials: SocialType[]
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
  const education: EducationType[] = await fetchEducation()
  const experience: ExperienceType[] = await fetchExperience()
  const frontendSkills: FrontendSkillType[] = await fetchFrontendSkills()
  const backendSkills: BackendSkillType[] = await fetchBackendSkills()
  const projectsData: ProjectType[] = await fetchProjectsData()
  const projectCategory: ProjectCategoryType[] = await fetchProjectCategory()
  const socials: SocialType[] = await fetchSocial()
  const pageInfo: PageInfoType = await fetchPageInfo()

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
