import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaBlog
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md relative z-50">

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 px-6 py-2">
  <img className="h-10 w-12 object-contain" src="/rk-logo.png" alt="Rk-Logo" />
  <div className="hover:text-amber-600 text-2xl font-bold text-amber-400">Rk Global</div>
  </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <img className="h-10 w-12" src="/rk-logo.png" alt="Rk-Logo" />
            <div className="text-amber-400 text-2xl font-bold">Rk Global</div>
          </div>

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
