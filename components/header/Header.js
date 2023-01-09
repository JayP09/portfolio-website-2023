import { UilEstate,UilUser, UilFile, UilBriefcaseAlt, UilScenery,UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'

const Header = () => {
	/* Change Background Header */
	const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [Toggle, setToggle] = useState(false);
	const [activeLink, setActiveLink] = useState("#home")

  return (
    <header className={`w-full fixed bottom-0 md:bottom-auto md:top-0 md:left-0 bg- z-[100] bg-bodyColor lg:px-5 ${clientWindowHeight >= 80 && "shadow-[0_-1px_4px_rgba(0,0,0,0.15)]"}`}>
			<nav className="flex justify-between items-center h-12 md:h-[4.5rem] gap-x-4 mx-4 md:mx-6 lg:max-w-5xl lg:mx-auto">
				<a className="text-titleColor font-medium">
						Jay
				</a>
				<div className={Toggle ? "navMenu bottom-0":"navMenu"}>
					<ul className="grid grid-cols-3 md:flex gap-x-0 sm:gap-x-8 gridContainer">
						<li>
								<a href="#home" onClick={() => setActiveLink("#home")} className={activeLink === "#home" ? "navLink text-titleColorDark" : "navLink"}>
								<UilEstate className="navIcon"/> Home
								</a>
						</li>
						<li>
								<a href="#about" onClick={() => setActiveLink("#about")} className={activeLink === "#about" ? "navLink text-titleColorDark" : "navLink"}>
								<UilUser className="navIcon"/> About
								</a>
						</li>
						<li>
								<a href="#skills" onClick={() => setActiveLink("#skills")} className={activeLink === "#skills" ? "navLink text-titleColorDark" : "navLink"}>
								<UilFile className="navIcon"/> Skills
								</a>
						</li>
						{/* <li>
								<a href="#services" className="navLink">
								<UilBriefcaseAlt className="navIcon"/> Services
								</a>
						</li> */}
						<li>
								<a href="#portfolio" onClick={() => setActiveLink("#portfolio")} className={activeLink === "#portfolio" ? "navLink text-titleColorDark" : "navLink"}>
								<UilScenery className="navIcon"/> Portfolio
								</a>
						</li>
						<li>
								<a href="#contact" onClick={() => setActiveLink("#contact")} className={activeLink === "#contact" ? "navLink text-titleColorDark" : "navLink"}>
								<UilMessage className="navIcon"/> Contact
								</a>
						</li>
					</ul>
					<div 
						className='navIcon absolute right-5 bottom-2 text-2xl cursor-pointer text-titleColor hover:text-black'
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