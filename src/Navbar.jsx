import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaBlog,
  FaBoxOpen,
  FaUsers,
  FaUser,
  FaQuoteLeft,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 dark:bg-gray-900">
      {/* Top Contact Info */}
      <div className="bg-gray-900 text-white text-sm py-1 px-2 dark:bg-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <FaPhone className="text-white" />
            <a href="tel:+254757855508" className="hover:underline">
              +254 757 855 508
            </a>
          </div>
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
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-start md:items-center">
        {/* Left side: Logo */}
        <div className="flex items-center gap-3 px-2">
          <img className="h-8 w-10 object-contain" src="/rk-logo.png" alt="Rk-Logo" />
          <div className="text-xl font-bold text-amber-400 hover:text-amber-600">
            Redempta Kanja Global
          </div>
        </div>

        {/* Right side: Mobile Hamburger & DarkModeToggle */}
        <div className="flex flex-col items-end gap-2 md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
          {/* Dark Mode Toggle below hamburger icon */}
          <DarkModeToggle />
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
          <a href="#contact" className="hover:text-amber-600 flex flex-col items-center">
            <FaEnvelope className="text-gray-500 text-2xl" />
            Contact
          </a>
          <a href="#products" className="hover:text-amber-600 flex flex-col items-center">
            <FaBoxOpen className="text-gray-500 text-2xl" />
            Products
          </a>
          <a href="#team" className="hover:text-amber-600 flex flex-col items-center">
            <FaUsers className="text-gray-500 text-2xl" />
            Team
          </a>
          <a href="#inspiration" className="hover:text-amber-600 flex flex-col items-center">
            <FaQuoteLeft className="text-gray-500 text-2xl" />
            Inspiration
          </a>
          <a
            href="#book"
            className="ml-12 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
          >
            Book a Session
          </a>

          {/* Desktop Dark Mode Toggle */}
          <span className="ml-2">
            <DarkModeToggle />
          </span>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-3/4 bg-amber-400 text-white px-6 py-8 z-50 md:hidden"
          onClick={toggleMenu}
        >
          <nav className="space-y-6 mt-10 text-lg">
            <a href="#home" className="flex items-center gap-2 hover:text-blue-900">
              <FaHome /> Home
            </a>
            <a href="#about" className="flex items-center gap-2 hover:text-blue-900">
              <FaUser /> About
            </a>
            <a href="#services" className="flex items-center gap-2 hover:text-blue-900">
              <FaBriefcase /> Services
            </a>
            <a href="#blog" className="flex items-center gap-2 hover:text-blue-900">
              <FaBlog /> Blog
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-blue-900">
              <FaEnvelope /> Contact
            </a>
            <a href="#products" className="flex items-center gap-2 hover:text-blue-900">
              <FaBoxOpen /> Products
            </a>
            <a href="#team" className="flex items-center gap-2 hover:text-blue-900">
              <FaUsers /> Team
            </a>
            <a href="#inspiration" className="flex items-center gap-2 hover:text-blue-900">
              <FaQuoteLeft /> Inspiration
            </a>
            <a
              href="#book"
              className="block mt-4 bg-white text-center py-2 rounded-lg text-amber-400 hover:bg-amber-600"
            >
              Book a Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
