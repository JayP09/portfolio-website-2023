import Head from 'next/head'
import Header from '../components/header/Header'
import HeroSection from '../components/home/HeroSection'

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
      </Head>
      <main className="bg-[#fafafa] text-[#757575]">
        {/* Header */}
        <Header />

        {/* Hero */}
        <HeroSection />

        {/* About */}

        {/* Skills */}

        {/* Eduaction and experience */}

        {/* Projects */}

        {/* Contact Me */}

        {/* Footer */}
      </main>
    </div>
  )
}
