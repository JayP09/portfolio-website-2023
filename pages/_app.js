import '../styles/globals.css'
import React, {useState, useEffect} from "react"
import {motion} from "framer-motion"
import LoadingScreen from '../components/loadingscreen/LoadingScreen';

export default function App({ Component, pageProps }) {
  const [showLoading, setShowLoading] = useState(true);
  
  if (!showLoading) {
    return <Component {...pageProps} />
  }
  
  return (
    <LoadingScreen showLoading={showLoading} setShowLoading={setShowLoading} />
  );
}
