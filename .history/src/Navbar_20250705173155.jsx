import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaBlog,
  FaUser,
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
      <div className="bg-gray-400 text-white text-sm py-1 px-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Phone Left */}
          <div className="flex items-center gap-1">
            <FaPhone className="text-white" />
            <a
              href="tel:+254757855508"
              className="hover:underline"
            >
              +254 757 855 508
            </a>
          </div>

          {/* Email Right */}
          <div className="flex items-center gap-1">
            <FaEnvelope className="text-white" />
            <a
              href="mailto:info@redemptakanjaglobal.com"
              className="hover:underline"
            >
              info@redemptakanjaglobal.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2">
          <img className="h-10 w-12 object-contain" src="/rk-logo.png" alt="Rk-Logo" />
          <div className="hover:text-amber-600 text-2xl font-bold text-amber-400">
            RK GLOBAL
          </div>
        </div>

        {/* Desktop Nav */}
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


          <a
            href="#book"
            className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
          >
            Book a Session
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-3/4 bg-amber-400 text-white px-6 py-8 z-50 md:hidden"
          onClick={toggleMenu}
        >
          <nav className="space-y-6 mt-10 text-lg">
            <a href="#home" className="flex items-center gap-2 hover:text-blue-400">
              <FaHome /> Home
            </a>
            <a href="#about" className="flex items-center gap-2 hover:text-blue-400">
              <FaUser /> About
            </a>
            <a href="#services" className="flex items-center gap-2 hover:text-blue-400">
              <FaBriefcase /> Services
            </a>
            <a href="#blog" className="flex items-center gap-2 hover:text-blue-400">
              <FaBlog /> Blog
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-blue-400">
              <FaEnvelope /> Contact
            </a>
            <a href="#book" className="block mt-4 bg-white text-center py-2 rounded-lg text-amber-400 hover:bg-amber-600">
              Book a Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
