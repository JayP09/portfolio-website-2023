import { UilEstate,UilUser, UilFile, UilBriefcaseAlt, UilScenery,UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'
import { useState } from 'react'

const Header = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <header className="w-full fixed bottom-0 md:bottom-auto md:top-0 md:left-0 bg- z-[100] bg-[#fafafa]">
			<nav className="flex justify-between items-center h-12 md:h-[4.5rem] gap-x-4 mx-4 md:mx-6 lg:max-w-5xl lg:mx-auto">
				<a className="text-[#333333] font-medium">
						Jay
				</a>
				<div className={Toggle ? "navMenu bottom-0":"navMenu"}>
					<ul className="grid grid-cols-3 md:flex gap-x-0 sm:gap-x-8 gridContainer">
						<li>
								<a href="#home" className="navLink">
								<UilEstate className="navIcon"/> Home
								</a>
						</li>
						<li>
								<a href="#about" className="navLink">
								<UilUser className="navIcon"/> About
								</a>
						</li>
						<li>
								<a href="#skills" className="navLink">
								<UilFile className="navIcon"/> Skills
								</a>
						</li>
						<li>
								<a href="#services" className="navLink">
								<UilBriefcaseAlt className="navIcon"/> Services
								</a>
						</li>
						<li>
								<a href="#portfolio" className="navLink">
								<UilScenery className="navIcon"/> Portfolio
								</a>
						</li>
						<li>
								<a href="#contact" className="navLink">
								<UilMessage className="navIcon"/> Contact
								</a>
						</li>
					</ul>
					<div 
						className='navIcon absolute right-5 bottom-2 text-2xl cursor-pointer text-[#333333] hover:text-black'
						onClick={() => setToggle((prevToggle) => !prevToggle)}
					>
					<UilTimes />
					</div>
				</div>
				<div 
					className="block md:hidden text-[#333333] font-medium text-lg cursor-pointer"
					onClick={() => setToggle((prevToggle) => !prevToggle)}
				>
					<UilApps />
				</div>
			</nav>
    </header>
  )
}

export default Header