import React from 'react';
import NPKImage from '../assets/NPKimage.png';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-green-100 text-gray-800 min-h-screen pt-16 flex items-center justify-center">
      <div className="container mx-auto px-6 py-20 md:flex md:items-center md:space-x-12 relative z-10">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4 text-green-700">
            Smarter Fertilization. Superior Harvests.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Our platform uses real-time data and intelligent algorithms to optimize nutrient application, leading to unparalleled efficiency and robust, healthy crops.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="/features" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
              Explore Features
            </a>
            <a href="/login" className="border-2 border-green-600 text-green-600 font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-green-600 hover:text-white">
              Get Started
            </a>
          </div>
        </div>
        
        {/* Large contextual image */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg lg:max-w-xl shadow-2xl rounded-lg overflow-hidden">
            <img src={NPKImage} alt="Smarter Farming" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;