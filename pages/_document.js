import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Software Engineer with experience in web development using HTML, CSS, JavaScript, React and Next.js. I have a degree in Computer Science, and I am passionate about web development. My portfolio showcases my skills and experience." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <meta property="og:url" content="https://jaypanchal.me" />
        <meta property="og:title" content="Jay Panchal • Software Developer" />
        <meta property="og:site_name" content="Jay Panchal" />
        <meta property="og:type" content="website" />
        <meta name="og:description" content="Software Engineer with experience in web development using HTML, CSS, JavaScript, React and Next.js. I have a degree in Computer Science, and I am passionate about web development. My portfolio showcases my skills and experience." />
        <link rel="canonical" href="https://jaypanchal.me" />
        <meta property="og:image" content="https://raw.githubusercontent.com/JayP09/portfolio-website-2023/main/public/banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JayPTwts" />
        <meta name="twitter:title" content="Jay Panchal Portfolio" />
        <meta name="twitter:description" content="Software Engineer with experience in web development using HTML, CSS, JavaScript, React and Next.js. I have a degree in Computer Science, and I am passionate about web development. My portfolio showcases my skills and experience." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/JayP09/portfolio-website-2023/main/public/banner.png" />
        <meta name="twitter:creator" content="@JayPTwts"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
