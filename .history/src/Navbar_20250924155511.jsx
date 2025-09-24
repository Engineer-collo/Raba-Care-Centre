import React, { useState, useEffect } from "react";

const defaultLogoUrl = "/rabacare.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState(defaultLogoUrl);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/logos");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0 && data[0].logo_url) {
          setLogoUrl(data[0].logo_url);
        } else {
          console.warn("Logo data is empty or invalid:", data);
        }
      } catch (err) {
        console.error("Failed to fetch logo:", err);
        setLogoUrl(defaultLogoUrl);
      }
    };

    fetchLogo();
  }, []);

  // Close navbar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#581616] text-white shadow-md">
      <div>
        
      </div>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo + Site Name */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full shadow-md">
            <img
              src={logoUrl}
              alt="Raba Care Center Logo"
              className="h-12 w-12 object-contain"
              onError={(e) => {
                e.currentTarget.src = defaultLogoUrl;
              }}
            />
          </div>
          <span className="text-xl font-bold text-white">
            <a href="#home" className="hover:text-amber-400">Raba Care Center</a>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-amber-400">Home</a>
          <a href="#about" className="hover:text-amber-400">About</a>
          <a href="#services" className="hover:text-amber-400">Services</a>
          <a href="#gallery" className="hover:text-amber-400">Gallery</a>
          <a href="#contact" className="hover:text-amber-400">Contact</a>
          <a
            href="profile"
            className="ml-4 bg-amber-400 text-[#581616] font-semibold px-4 py-2 rounded-lg hover:bg-amber-500 transition"
          >
            Our Profile
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#581616] px-6 py-4 flex flex-col items-center gap-4">
          <a href="#home" onClick={handleLinkClick} className="hover:text-amber-400">Home</a>
          <a href="#about" onClick={handleLinkClick} className="hover:text-amber-400">About</a>
          <a href="#services" onClick={handleLinkClick} className="hover:text-amber-400">Services</a>
          <a href="#gallery" onClick={handleLinkClick} className="hover:text-amber-400">Gallery</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:text-amber-400">Contact</a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="bg-amber-400 text-[#581616] font-semibold px-4 py-2 rounded-lg text-center hover:bg-amber-500 transition"
          >
            Reach us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
