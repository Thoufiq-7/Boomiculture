import React from 'react';
import { FaSeedling, FaCloud, FaLaptopCode, FaChartLine, FaRobot, FaHandHoldingHeart, FaLeaf, } from 'react-icons/fa';

// Array of objects representing the app's features
const features = [
  {
    id: 1,
    title: "Precision Farming",
    description: "Utilize real-time data from soil and crop sensors to optimize planting, fertilizing, and irrigation for maximum yield and minimum waste.",
    icon: FaLaptopCode,
    color: "text-green-500",
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    description: "Our AI models analyze weather patterns, soil conditions, and historical data to provide predictive insights and personalized recommendations.",
    icon: FaChartLine,
    color: "text-blue-500",
  },
  {
    id: 3,
    title: "Automated Crop Monitoring",
    description: "Drones and automated systems continuously monitor your fields, detecting pests, diseases, and nutrient deficiencies before they spread.",
    icon: FaRobot,
    color: "text-gray-500",
  },
  {
    id: 4,
    title: "Cloud-Based Management",
    description: "Access your farm data, reports, and controls from anywhere in the world with our secure, user-friendly cloud platform.",
    icon: FaCloud,
    color: "text-sky-500",
  },
  {
    id: 5,
    title: "Sustainable Practices",
    description: "Minimize your environmental footprint by reducing chemical usage and water consumption, leading to healthier soil and ecosystems.",
    icon: FaHandHoldingHeart,
    color: "text-emerald-500",
  },
  {
    id: 6,
    title: "Yield Forecasting",
    description: "Get accurate yield predictions based on a combination of machine learning algorithms and real-time field data to plan for harvest and sales.",
    icon: FaSeedling,
    color: "text-yellow-500",
  },
];

const steps = [
  {
    step: 1,
    title: "Deploy Sensors",
    description: "Install our compact, wireless sensors in your fields to begin collecting real-time data on soil moisture, pH, and nutrient levels."
  },
  {
    step: 2,
    title: "Connect to the Cloud",
    description: "Our IoT devices securely transmit all collected data to your personal cloud dashboard, accessible from any device."
  },
  {
    step: 3,
    title: "Receive Insights",
    description: "Our AI engine analyzes the data and provides you with actionable insights and automated alerts for optimal farm management."
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline Section */}
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            A Better Way to Farm
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our technology empowers farmers to be more efficient, profitable, and sustainable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            {features.map((feature) => (
              <div key={feature.id} className="relative p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <dt className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white ${feature.color}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-lg leading-6 font-bold text-gray-900 pt-3">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
      {/* "How It Works" Section */}
      <div className="max-w-7xl mx-auto mt-32">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Process
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-green-500 text-white text-3xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-base text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-100 mt-32 py-16 rounded-lg shadow-inner">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FaLeaf className="mx-auto text-green-600 h-10 w-10 mb-4" />
          <p className="text-2xl font-semibold italic text-gray-700 leading-relaxed">
            "NovaFarm has completely transformed how I manage my farm. My yields have increased by 20% and my water usage has dropped significantly. It's a game-changer for modern agriculture."
          </p>
          <p className="mt-8 text-lg font-bold text-gray-900">
            - Johnathan S.
          </p>
          <p className="text-sm text-gray-500">
            Organic Farmer, California
          </p>
        </div>
      </div>
    </div>
  );
}