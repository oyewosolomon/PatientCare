import React, { useState, useEffect } from 'react';
import { Activity, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add scroll event listener to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">PatientCare AI</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Call-to-Action Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu (Sliding Animation) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;