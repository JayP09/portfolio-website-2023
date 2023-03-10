import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  UilEstate,
  UilUser,
  UilFile,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from '@iconscout/react-unicons'

const Header = () => {
  /* Change Background Header */
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0)

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const [Toggle, setToggle] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  return (
    <header
      className={`w-full fixed bottom-0 md:bottom-auto md:top-0 md:left-0 bg- z-[100] bg-bodyColor lg:px-5 ${
        clientWindowHeight >= 80 && 'shadow-[0_-1px_4px_rgba(0,0,0,0.15)]'
      }`}
    >
      <nav className="flex justify-between items-center h-12 md:h-[4.5rem] gap-x-4 mx-4 md:mx-6 lg:max-w-5xl lg:mx-auto">
        <AnimatePresence>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 2.25,
            }}
            viewport={{ once: true }}
          >
            <a
              href="https://jaypanchal.me/"
              className="text-titleColor font-medium text-xl"
              aria-label="Jay Panchal Portfolio Website"
            >
              {'<' + 'Jay' + '/>'}
            </a>
          </motion.div>
        </AnimatePresence>

        <div className={Toggle ? 'navMenu bottom-0' : 'navMenu'}>
          <ul className="grid grid-cols-3 md:flex gap-x-0 sm:gap-x-8 gridContainer">
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 2.25,
              }}
              viewport={{ once: true }}
            >
              <a
                href="#home"
                onClick={() => setActiveLink('#home')}
                className={
                  activeLink === '#home'
                    ? 'navLink text-titleColorDark'
                    : 'navLink'
                }
                aria-label="Home Section"
              >
                <UilEstate className="navIcon" /> Home
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 2.25,
              }}
              viewport={{ once: true }}
            >
              <a
                href="#about"
                onClick={() => setActiveLink('#about')}
                className={
                  activeLink === '#about'
                    ? 'navLink text-titleColorDark'
                    : 'navLink'
                }
                aria-label="About me"
              >
                <UilUser className="navIcon" /> About
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 2.25,
              }}
              viewport={{ once: true }}
            >
              <a
                href="#skills"
                onClick={() => setActiveLink('#skills')}
                className={
                  activeLink === '#skills'
                    ? 'navLink text-titleColorDark'
                    : 'navLink'
                }
                aria-label="Browser my skills"
              >
                <UilFile className="navIcon" /> Skills
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 2.25,
              }}
              viewport={{ once: true }}
            >
              <a
                href="#portfolio"
                onClick={() => setActiveLink('#portfolio')}
                className={
                  activeLink === '#portfolio'
                    ? 'navLink text-titleColorDark'
                    : 'navLink'
                }
                aria-label="Browser my work"
              >
                <UilScenery className="navIcon" /> Portfolio
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 2.25,
              }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                onClick={() => setActiveLink('#contact')}
                className={
                  activeLink === '#contact'
                    ? 'navLink text-titleColorDark'
                    : 'navLink'
                }
                aria-label="Contact me"
              >
                <UilMessage className="navIcon" /> Contact
              </a>
            </motion.li>
          </ul>
          <div
            className="navIcon absolute right-5 bottom-2 text-2xl cursor-pointer text-titleColor hover:text-black"
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          >
            <UilTimes />
          </div>
        </div>
        <div
          className="block md:hidden text-titleColor font-medium text-lg cursor-pointer"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          <UilApps />
        </div>
      </nav>
    </header>
  )
}

export default Header
