import React from 'react';

// This component is reusable for all your alternating feature sections
// The 'reverse' prop determines the layout (text-on-left or text-on-right)

const FeatureSection = ({ heading, subheading, description, imageSrc, imageAlt, reverse }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className={`container mx-auto px-6 flex flex-col items-center md:flex-row md:space-x-12 ${reverse ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
        
        {/* Text content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl font-bold text-green-800 mb-4">{heading}</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{subheading}</h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2">
          <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow-xl" />
        </div>
        
      </div>
    </section>
  );
};

export default FeatureSection;