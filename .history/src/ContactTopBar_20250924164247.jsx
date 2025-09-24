import React from "react";
import { Phone, Mail, Facebook, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-amber-600 text-white text-sm px-6 py-2 flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
      {/* Left side: Phone & Email */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
        <a
          href="tel:+254787530331"
          className="flex items-center hover:text-gray-200 transition"
        >
          <Phone className="w-4 h-4 mr-1" />
          +254787530331
        </a>
        <a
          href="mailto:info@rabacare.com"
          className="flex items-center hover:text-gray-200 transition"
        >
          <Mail className="w-4 h-4 mr-1" />
          info@rabacarecenter.co.ke
        </a>
      </div>

      {/* Social Icons (below contacts on phone) */}
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
