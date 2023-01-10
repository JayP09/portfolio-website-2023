import React, { useState, useEffect } from 'react';

const LoadingScreen = ({showLoading, setShowLoading}) => {
  const [loadingIndex, setLoadingIndex] = useState(0);
  const hellos = ["નમસ્તે","नमस्ते","Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Hallo", "Привет", "こんにちは"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingIndex((loadingIndex + 1) % hellos.length);
    }, 250);
    return () => clearInterval(intervalId);
  }, [loadingIndex]);
  
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2250);
  }, []);
  
  return (
    <div
      className="bg-titleColor flex justify-center items-center h-screen absolute top-0 left-0 w-full"
    >
      <h1 className="font-poppins text-containerColor text-4xl">
        {hellos[loadingIndex]}
        <span>👋</span>
      </h1>
    </div>
  );
};

export default LoadingScreen;
