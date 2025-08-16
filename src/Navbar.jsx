import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import TypewriterAnimations from './TypewriterAnimations';
import {
  FaBars, FaTimes, FaPhone, FaEnvelope,
  FaHome, FaInfoCircle, FaBriefcase, FaBlog,
  FaBoxOpen, FaUsers, FaUser, FaQuoteLeft
} from 'react-icons/fa';

const defaultNavbarData = {
  site_name: 'Redempta Kanja Global',
  email: 'info@redemptakanjaglobal.com',
  phone: '0757855508',
  book_button_text: 'Book a Session',
  book_button_link: '#book',
};

const defaultLogoUrl = '/rk-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarData, setNavbarData] = useState(defaultNavbarData);
  const [logoUrl, setLogoUrl] = useState(defaultLogoUrl);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    // Fetch navbar data
    const fetchNavbar = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/navbars');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setNavbarData({
            ...defaultNavbarData,
            ...data[0],
          });
        } else {
          console.warn('Invalid navbar data:', data);
        }
      } catch (err) {
        console.error('Failed to fetch navbar:', err);
      }
    };

    // Fetch logo data separately
    const fetchLogo = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/logos');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0 && data[0].logo_url) {
          setLogoUrl(data[0].logo_url);
        } else {
          console.warn('Logo data is empty or invalid:', data);
        }
      } catch (err) {
        console.error('Failed to fetch logo:', err);
        setLogoUrl(defaultLogoUrl);
      }
    };

    fetchNavbar();
    fetchLogo();
  }, []);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 dark:bg-gray-900">
      {/* Top Welcome with Typewriter */}
      <div className="bg-amber-400 text-white text-center py-2">
        <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold leading-tight">
          <TypewriterAnimations 
            words={[
              "Welcome to Redempta Kanja Global Official Website.",
              "Purpose. Freedom. Impact.",
              "Book your session today!"
            ]}
          />
        </div>
      </div>

      {/* Top Contact Info */}
      <div className="bg-gray-900 text-white text-sm py-1 px-2 dark:bg-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <FaPhone className="text-white" />
            <a href={`tel:${navbarData.phone}`} className="italic hover:underline">
              {navbarData.phone}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope className="text-white" />
            <a href={`mailto:${navbarData.email}`} className="italic hover:underline">
              {navbarData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Mobile Logo & Menu */}
        <div className="w-full flex justify-between items-center md:hidden">
          <div className="flex items-center gap-2">
            <img
              className="h-12 w-10 object-contain"
              src={logoUrl}
              alt="Logo"
              onError={(e) => { e.target.src = defaultLogoUrl; }}
            />
            <div className="flex flex-col">
              <div className="text-lg font-bold text-amber-400 hover:text-amber-600">
                {navbarData.site_name}
              </div>
              <p className="text-sm italic text-gray-500">
                {navbarData.tagline || "Purpose. Freedom. Impact."}
              </p>
            </div>
          </div>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile: Dark Mode Toggle */}
        <div className="mt-2 self-end md:hidden">
          <DarkModeToggle />
        </div>

        {/* Desktop Logo & Site Name */}
        <div className="hidden md:flex flex-col items-start gap-1 px-2">
          <div className="flex items-center gap-3">
            <img
              className="h-6 w-8 object-contain"
              src={logoUrl}
              alt="Logo"
              onError={(e) => { e.target.src = defaultLogoUrl; }}
            />
            <div className="text-xl font-bold text-amber-400 hover:text-amber-600">
              {navbarData.site_name}
            </div>
          </div>
          <p className="text-sm italic text-gray-500">
            {navbarData.tagline || "Purpose. Freedom. Impact."}
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {[
            { id: 'home', label: 'Home', icon: <FaHome /> },
            { id: 'about', label: 'About', icon: <FaInfoCircle /> },
            { id: 'services', label: 'Services', icon: <FaBriefcase /> },
            { id: 'blog', label: 'Blog', icon: <FaBlog /> },
            { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
            { id: 'products', label: 'Products', icon: <FaBoxOpen /> },
            { id: 'team', label: 'Team', icon: <FaUsers /> },
            { id: 'inspiration', label: 'Inspiration', icon: <FaQuoteLeft /> },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-amber-600 flex flex-col items-center"
            >
              <span className="text-gray-500 text-2xl">{item.icon}</span>
              {item.label}
            </a>
          ))}

          <a
            href={navbarData.book_button_link || '#'}
            className="ml-12 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
          >
            {navbarData.book_button_text}
          </a>

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
            {[
              { id: 'home', label: 'Home', icon: <FaHome /> },
              { id: 'about', label: 'About', icon: <FaUser /> },
              { id: 'services', label: 'Services', icon: <FaBriefcase /> },
              { id: 'blog', label: 'Blog', icon: <FaBlog /> },
              { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
              { id: 'products', label: 'Products', icon: <FaBoxOpen /> },
              { id: 'team', label: 'Team', icon: <FaUsers /> },
              { id: 'inspiration', label: 'Inspiration', icon: <FaQuoteLeft /> },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 hover:text-blue-900"
              >
                {item.icon} {item.label}
              </a>
            ))}
            <a
              href={navbarData.book_button_link || '#'}
              className="block mt-4 bg-white text-center py-2 rounded-lg text-amber-400 hover:bg-amber-600"
            >
              {navbarData.book_button_text}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
