import Head from 'next/head'
import About from '../components/about/About'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'
import Skills from '../components/skills/Skills'

export default function Home() {
  return (
    <div className='scroll-smooth font-poppins text-base'>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <main className="bg-[#fafafa] text-[#757575]">
        {/* Header */}
        <Header />

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Eduaction and experience */}

        {/* Projects */}

        {/* Contact Me */}

        {/* Footer */}
      </main>
    </div>
  )
}
