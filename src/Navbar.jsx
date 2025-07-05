import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaBlog,
  FaPhoneAlt
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top Contact Info */}
      <div className="bg-gray-300 text-sm md:text-base py-2 px-4 flex justify-between items-center">
        {/* Left: Phone */}
        <div className="flex items-center gap-2 text-white">
          <FaPhoneAlt />
          <a
            href="tel:+254757855508"
            className="hover:underline"
          >
            +254 757 855 508
          </a>
        </div>

        {/* Right: Email */}
        <div className="flex items-center gap-2 text-white">
          <FaEnvelope />
          <a
            href="mailto:info@redemptakanjaglobal.com"
            className="hover:underline"
          >
            info@redemptakanjaglobal.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-10 w-12 object-contain" src="/rk-logo.png" alt="Rk-Logo" />
          <div className="text-amber-400 text-2xl font-bold hover:text-amber-600">Rk Global</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="#home" className="hover:text-amber-600 flex flex-col items-center">
            <FaHome className="text-gray-500 text-2xl" />
            Home
          </a>
          <a href="#about" className="hover:text-amber-600 flex flex-col items-center">
            <FaInfoCircle className="text-gray-500 text-2xl" />
            About
          </a>
          <a href="#services" className="hover:text-amber-600 flex flex-col items-center">
            <FaBriefcase className="text-gray-500 text-2xl" />
            Services
          </a>
          <a href="#blog" className="hover:text-amber-600 flex flex-col items-center">
            <FaBlog className="text-gray-500 text-2xl" />
            Blog
          </a>
          <a href="#contact" className="hover:text-amber-600 flex flex-col items-center">
            <FaEnvelope className="text-gray-500 text-2xl" />
            Contact
          </a>

          <a
            href="#book"
            className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
          >
            Book a Session
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-3/4 bg-amber-400 text-white px-6 py-8 z-50 md:hidden">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaTimes size={24} />
          </button>

          <nav className="space-y-6 mt-10 text-lg">
            <a href="#home" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400">
              <FaHome /> Home
            </a>
            <a href="#about" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400">
              <FaUser /> About
            </a>
            <a href="#services" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400">
              <FaBriefcase /> Services
            </a>
            <a href="#blog" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400">
              <FaBlog /> Blog
            </a>
            <a href="#contact" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400">
              <FaEnvelope /> Contact
            </a>
            <a href="#book" onClick={toggleMenu} className="block mt-4 bg-white text-center py-2 rounded-lg text-amber-400 hover:bg-amber-600">
              Book a Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
