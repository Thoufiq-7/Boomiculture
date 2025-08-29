import React from 'react';
import Hero from './Hero';
import FeatureSection from './FeatureSection'; // Import the new component
import Footer from './Footer';

// Assuming these images are in your assets folder
import image1 from '../assets/image1.png';  

const CoreMission = () => (
  <section className="py-20 bg-green-50 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-green-800 mb-4">Cultivating a Sustainable Future</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600">
        At NovaFarm, we believe that the next revolution in agriculture is rooted in data. Our mission is to empower farmers with intelligent tools that lead to healthier crops, reduced waste, and a more sustainable planet.
      </p>
    </div>
  </section>
);
const HowItWorks = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-700 mb-2">Data Collection</h3>
                    <p className="text-gray-600">Sensors in your field and drones in the sky gather real-time data on soil health and crop conditions.</p>
                </div>
                <div className="p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-700 mb-2">AI-Powered Insights</h3>
                    <p className="text-gray-600">Our platform analyzes this data to create a custom fertilizer plan, telling you exactly what to apply and where.</p>
                </div>
                <div className="p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-700 mb-2">Optimized Application</h3>
                    <p className="text-gray-600">Use our recommendations to apply fertilizer with unmatched precision, ensuring every plant gets what it needs.</p>
                </div>
            </div>
        </div>
    </section>
);

// Call to Action Section
const CallToAction = () => (
    <section className="py-20 bg-green-50 text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Ready to Grow Smarter?</h2>
            <a href="/login" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Get Started
            </a>
        </div>
    </section>
);

// Main Component to render everything together
const MainPageContent = () => (
  <>
    <Hero />
    <CoreMission />
    <HowItWorks />
    <CallToAction />

    {/* First Feature Section (text on left) */}
    <FeatureSection 
      heading="Precision Agriculture"
      subheading="For a Sustainable Future"
      description="Leverage intelligent tools and real-time data to reduce fertilizer use by 20% while increasing your yields by 15%. Our AI-powered analytics will revolutionize your farm's efficiency and impact."
      imageSrc={image1}
      imageAlt="A beautiful landscape image of farming"
      reverse={false}
    />
    <Footer />

    {/* Second Feature Section (text on right) */}
    

    {/* Add more sections as needed */}
    
  </>
);

export default MainPageContent;