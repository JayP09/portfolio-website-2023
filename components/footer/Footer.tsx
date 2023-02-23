import { useAppContext } from '@/context/context'
import { getFooterSocialIcon } from '@/utils/extraUtils'
import React from 'react'

const Footer = () => {
  const { socials } = useAppContext()

  return (
    <footer className="footer bg-containerColor border-t-[1px] border-solid border-[rgba(0,0,0,0.1)]">
      <div className="footerContainer pt-8 pb-24 sectionContainer">
        <h1 className="footerTitle text-titleColor text-3xl text-center mb-8">
          Jay
        </h1>
        <ul className="footerList flex justify-center gap-x-6 mb-8">
          <li>
            <a href="#Home" className="footerLink">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footerLink">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footerLink">
              Portfolio
            </a>
          </li>
        </ul>
        <div className="footerSocial flex justify-center gap-x-5">
          {socials.map((social) => (
            <a
              href="https://github.com/JayP09"
              className="footerSocialIcon"
              target="_blank"
              rel="noreferrer"
              key={social._id}
            >
              {getFooterSocialIcon(social.title)}
            </a>
          ))}
        </div>
        <span className="footerCopy block mt-16 text-titleColor text-center text-sm">
          &#169;2023. Made by Jay Panchal
        </span>
      </div>
    </footer>
  )
}

export default Footer
