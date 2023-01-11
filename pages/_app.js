import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'

export default function App({ Component, pageProps }) { 
  return (
    <>
      <Head>
        <title>Jay Panchal • Software Engineer </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
