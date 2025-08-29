import React from 'react';
import { Link } from 'react-router-dom';
import NFLogoImg from "../assets/NfLogo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // You need to install react-icons: npm install react-icons

export default function Footer() {
  const year = new Date().getFullYear();

  const companyLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Mission", path: "/mission" },
    { label: "Contact", path: "/contact" },
  ];

  const resourcesLinks = [
    { label: "Blogs", path: "/blogs" },
    { label: "Features", path: "/features" },
    { label: "FAQs", path: "/faq" },
  ];

  return (
    <footer className="bg-green-800 text-white py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-green-700 pb-8">
        {/* Logo and Social Section */}
        <div className="flex flex-col items-start space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={NFLogoImg} alt="NovaFarm Logo" className="w-16 h-16 object-contain" />
            <span className="text-2xl font-bold tracking-widest">NovaFarm</span>
          </Link>
          <p className="text-sm text-green-300">Sustainable Solutions for a Greener Tomorrow.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-green-300 hover:text-white transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-green-300 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-green-300 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-green-300 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Company Links Section */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-green-200 mb-4">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="text-green-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-green-200 mb-4">Resources</h4>
          <ul className="space-y-2">
            {resourcesLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="text-green-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-green-200 mb-4">Contact Us</h4>
          <address className="not-italic text-sm text-green-300">
            NovaFarm Inc.<br />
            123 Green Valley, Agronomia, 10101<br />
            info@novafarm.com<br />
            +1 (555) 123-4567
          </address>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-green-400">
        <p>&copy; {year} NovaFarm. All rights reserved.</p>
      </div>
    </footer>
  );
}