import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar'; // Assuming Sidebar is in a separate file

const blogSections = [
  {
    id: "intro",
    title: "Introduction",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    content: `Fertilizer optimization is a crucial practice in modern agriculture focused on the precise and intelligent application of fertilizers to improve crop yields while minimizing environmental impact. The global demand for food production is steadily rising due to population growth, yet the need for sustainable farming practices has never been more urgent.`,
  },
  {
    id: "what-is",
    title: "What is Fertilizer Optimization?",
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    content: `Fertilizer optimization is the process of applying the right amount and type of fertilizer at the right time and location to meet plant nutrient requirements without excess waste. It balances crop nutrient needs with soil nutrient availability, weather conditions, and environmental safety.`,
  },
  {
    id: "why-matters",
    title: "Why Fertilizer Optimization Matters",
    imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    content: `It avoids over-application of costly fertilizers reducing input costs while maintaining or increasing yield, prevents nutrient runoff that contaminates waterways, helps maintain soil nutrient balance, increases crop productivity, and helps farmers meet environmental regulations.`,
  },
  {
    id: "key-tech",
    title: "Key Technologies Enabling Fertilizer Optimization",
    imageUrl: "https://images.unsplash.com/photo-1581094640673-d9aefccd0d9e?auto=format&fit=crop&w=800&q=80",
    content: `Sensors, remote sensing, artificial intelligence, machine learning, IoT devices, and automated machinery enable fertilizer optimization by providing real-time data, analysis, and precise nutrient application.`,
    subPoints: [
      "Soil and Crop Sensors: Measure pH, moisture, nutrients.",
      "Remote Sensing: Satellites and drones monitor crops.",
      "Artificial Intelligence: Data-driven fertilizer recommendations.",
      "Internet of Things: IoT devices for real-time monitoring and precision application.",
    ],
  },
  {
    id: "side-topics",
    title: "Side Topics to Explore",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    content: `The broader precision agriculture context, soil health, AI applications, environmental impacts, sensor tech, IoT and robotics, global policies, economic benefits, and future biotech trends.`,
    subPoints: [
      "Precision Agriculture: GPS mapping and farm management software.",
      "Soil Health: Sustainable nutrient management and carbon sequestration.",
      "AI in Farming: Pest control, irrigation, yield prediction.",
      "Environmental Impact: Reducing agrochemical pollution.",
      "Sensor Technology: Advanced soil and plant sensors.",
      "IoT & Robotics: Drones and autonomous vehicles.",
      "Regulations: Compliance with global fertilizer policies.",
      "Economic Benefits: Cost savings and ROI case studies.",
      "Biotechnology: GMO crops and microbial fertilizers.",
    ],
  },
  {
    id: "challenges",
    title: "Challenges and Considerations",
    imageUrl: "https://images.unsplash.com/photo-1526403228306-80f70c6443e3?auto=format&fit=crop&w=800&q=80",
    content: `Challenges include initial costs, data integration, knowledge gaps, regional variability, and data privacy concerns.`,
  },
  {
    id: "conclusion",
    title: "Conclusion",
    imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    content: `Fertilizer optimization is key to climate-smart, sustainable agriculture. Digital tools and AI enable farmers to boost production while protecting the environment, and ongoing advances will drive more accessible precision farming worldwide.`,
  },
];

export default function Blog() {
  const [activeSection, setActiveSection] = useState(blogSections[0].id);
  const [expandedSections, setExpandedSections] = useState({});
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const toggleExpand = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -75% 0px",
        threshold: 0,
      }
    );

    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-10">
      <Sidebar sections={blogSections} onClick={scrollToSection} activeId={activeSection} />

      <main className="md:ml-12 flex-1 space-y-16 font-serif">
        <header className="mb-12 text-center md:pt-8">
          <h1 className="text-5xl font-bold mb-4">Fertilizer Optimization & Sustainable Agriculture</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring innovative technologies, benefits, and challenges transforming modern farming.
          </p>
        </header>

        {blogSections.map(({ id, title, imageUrl, content, subPoints }) => {
          const isExpandable = id === "side-topics" || id === "challenges";
          const isExpanded = expandedSections[id] || false;
          
          return (
            <article
              key={id}
              id={id}
              ref={(el) => (sectionRefs.current[id] = el)}
              className="bg-white rounded-lg shadow-xl overflow-hidden scroll-mt-20 transform transition-transform duration-300 hover:scale-105"
            >
              <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="mb-4 text-gray-800 leading-relaxed">{content}</p>

                {subPoints && (
                  <>
                    {isExpandable ? (
                      <div className="mt-4">
                        <button
                          onClick={() => toggleExpand(id)}
                          className="mb-4 px-4 py-2 bg-green-100 rounded-md font-semibold text-green-700 hover:bg-green-200 focus:outline-none"
                        >
                          {isExpanded ? "Collapse" : "Expand"} Details
                        </button>
                        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isExpanded ? "max-h-96" : "max-h-0"}`}>
                          <ul className="list-disc list-inside space-y-2 text-gray-700 border-l-4 border-green-300 pl-6">
                            {subPoints.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <ul className="list-disc list-inside space-y-1 text-gray-700 mt-4">
                        {subPoints.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </article>
          );
        })}

        <footer className="text-center py-12 text-gray-500">
          © 2025 Agriculture Tech Insights. All rights reserved.
        </footer>
      </main>
    </div>
  );
}