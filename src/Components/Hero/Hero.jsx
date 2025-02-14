import React, { useState, useEffect } from 'react';
import './Hero.css';
import footImage from '../../assets/images/web3Image1.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = footImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);




  return (
    <div className='hero flex flex-col items-center justify-center min-h-screen bg-black gap-6 pt-28 pb-8 px-4'>
      {/* Heading */}
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white text-center max-w-6xl mx-auto mb-4'>
        <span className='block sm:inline'>Lightning-Fast Blockchain</span>{' '}
        <br className='hidden sm:block' /> 
        AI-Driven Security.
      </h1>

      {/* Description */}
      <p className='text-xl sm:text-xl md:text-2xl text-white text-center max-w-3xl mx-auto mb-8'>
        Our next-generation blockchain achieves 120,000 TPS, delivering unmatched speed and scalability. Enhanced with AI-powered security, it ensures robust data protection and seamless performance.
      </p>

      {/* Buttons */}
      <div className='action-btn flex flex-col sm:flex-row gap-4 sm:gap-6'>
      <Link to="/started" >   <button className='start text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl'>
      Get Started
         
       </button>
       </Link>
       <Link to="/ecosystem" >   <button className='start text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl'>
       Ecosystems
         
       </button>
       </Link>
        
      </div>

      {/* Footer Image with loading state */}
      <div className='foot-image mt-8 sm:mt-12 w-full max-w-4xl relative'>
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="w-full h-64 sm:h-96 bg-gray-800 animate-pulse rounded-lg" />
        )}
        
        <img
          className={`w-full h-auto object-cover object-top rounded-lg shadow-lg transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={footImage}
          alt='Blockchain Illustration'
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          // Add width and height to prevent layout shift
          width={1200}
          height={675}
        />
      </div>
    </div>
  );
};

export default Hero;