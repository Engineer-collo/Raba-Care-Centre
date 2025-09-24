import React from "react";
import { Phone, Mail, Facebook, Linkedin } from "lucide-react";
import TypewriterAnimations from "./TypewriterAnimations";

const TopBar = () => {
  return (
    <div className="w-full bg-amber-600 text-white text-sm px-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
      {/* Left side: Phone & Email */}
      <div className="flex justify-center md:justify-start items-center space-x-4">
        <a
          href="tel:+254700000000"
          className="flex items-center hover:text-gray-200 transition"
        >
          <Phone className="w-4 h-4 mr-1" />
          +254 700 000 000
        </a>
        <a
          href="mailto:info@rabacare.com"
          className="flex items-center hover:text-gray-200 transition"
        >
          <Mail className="w-4 h-4 mr-1" />
          info@rabacare.com
        </a>
      </div>

      {/* Center: Typewriter Animation */}
      <div className="text-center">
        <TypewriterAnimations />
      </div>

      {/* Right side: Social Icons */}
      <div className="flex justify-center md:justify-end items-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
