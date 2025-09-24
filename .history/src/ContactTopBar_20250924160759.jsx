import React from "react";
import { Phone, Mail, Facebook, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-amber-600 text-white text-sm px-6 py-2 flex justify-between items-center">
      {/* Left side: Phone & Email */}
      <div className="flex items-center space-x-6">
        <a href="tel:+254700000000" className="flex items-center hover:text-gray-200 transition">
          <Phone className="w-4 h-4 mr-1" />
          +
        </a>
        <a href="mailto:info@rabacare.com" className="flex items-center hover:text-gray-200 transition">
          <Mail className="w-4 h-4 mr-1" />
          info@rabacare.co.ke
        </a>
      </div>

      {/* Right side: Social Icons */}
      <div className="flex items-center space-x-4">
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
