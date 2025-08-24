import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col">
      {/* Navbar / Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 tracking-wide mb-4 md:mb-0">
            🌱 Boomiculture
          </h1>
          <nav>
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-green-700 font-semibold text-lg">
              <li>
                <a href="#features" className="hover:text-green-900 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-900 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow container mx-auto px-6 py-20 flex flex-col items-center text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 leading-tight">
          Empowering Sustainable Farming with AI-Powered Crop & Fertilizer Management
        </h2>
        <p className="text-base md:text-lg text-green-700 mb-10 max-w-3xl">
          Boomiculture combines real-time soil and weather data with intelligent AI recommendations to help farmers maximize yields while protecting the environment.
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition w-full md:w-auto">
          Get Started Now
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 shadow-inner">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="🌡️"
              title="Real-Time Weather Integration"
              description="Stay updated with accurate weather data to adjust crop and fertilizer plans."
            />
            <FeatureCard
              icon="🤖"
              title="AI-Driven Recommendations"
              description="Leverage Gemini AI for precise, personalized fertilizer and crop management insights."
            />
            <FeatureCard
              icon="📊"
              title="Interactive Dashboards"
              description="Visualize soil health, crop growth, and yield predictions with intuitive charts."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-6 py-16 text-center max-w-4xl"
      >
        <h3 className="text-3xl font-semibold text-green-800 mb-6">
          Why Boomiculture?
        </h3>
        <p className="text-green-700 text-lg leading-relaxed px-2 md:px-0">
          Our platform bridges the gap between traditional farming and digital intelligence by providing sustainable, data-driven solutions designed to improve productivity without harming the environment.
        </p>
      </section>

      {/* Contact Section */}
      <footer
        id="contact"
        className="bg-green-800 text-green-50 py-8 mt-auto"
      >
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <p>
            Contact us at{' '}
            <a
              href="mailto:info@boomiculture.com"
              className="underline hover:text-green-300"
            >
              info@boomiculture.com
            </a>
          </p>
          <p className="mt-4 text-sm opacity-70">
            © 2025 Boomiculture. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-green-50 rounded-xl shadow-md hover:shadow-xl transition cursor-default">
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-green-800 mb-2">{title}</h4>
      <p className="text-green-700">{description}</p>
    </div>
  );
}
