import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NFLogoImg from "../assets/NfLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" },
    { label: "Features", path: "/features" },
    { label: "Login", path: "/login" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out
          ${scrolled
            ? "bg-green-600 shadow-2xl"
            : "bg-gradient-to-r from-green-300 via-green-500 to-green-700"
          }`}
      >
        {/* Changed from 'px-6 sm:px-12 md:px-20 lg:px-32' to new reduced padding */}
        <nav className="max-w-7xl mx-auto pl-2 pr-6 sm:pl-4 sm:pr-12 md:pl-8 md:pr-20 lg:pl-16 lg:pr-32">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className={`flex items-center space-x-3 cursor-pointer select-none
              transition-colors duration-700
              text-white
              ${scrolled
                  ? "drop-shadow-[0_0_12px_rgba(72,187,120,0.8)]"
                  : "drop-shadow-[0_0_6px_rgba(72,187,120,0.6)]"
              } hover:text-green-800`}
              aria-label="NovaFarm Home"
            >
              <img
                src={NFLogoImg}
                alt="NovaFarm Logo"
                className="w-18 h-20 object-contain"
              />
              <span className="text-3xl font-black tracking-widest">NovaFarm</span>
            </Link>
            
            <div className="hidden md:flex space-x-14 font-semibold text-lg">
              {navItems.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400
                    text-white
                    ${location.pathname === path
                      ? "font-extrabold shadow-[0_0_10px_rgba(72,187,120,0.9)]"
                      : ""
                    }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-3 right-3 h-1 rounded-full transition-all duration-300 ease-in-out ${location.pathname === path
                        ? "bg-green-400 scale-x-100"
                        : "bg-green-300 scale-x-0"
                      } origin-left transform`}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-white hover:bg-green-700 transition"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-96 py-4" : "max-h-0"
              }`}
            style={{ transitionProperty: "max-height, padding" }}
          >
            <nav className="flex flex-col space-y-3">
              {navItems.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 rounded-lg text-white font-semibold 
                    hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400
                    ${location.pathname === path
                      ? "bg-green-700"
                      : "bg-green-900/80"
                    } transition-colors duration-300`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </nav>
      </header>
      <div className="pt-16" />
    </>
  );
}