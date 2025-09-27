import React from "react";
import { Phone, Mail, Facebook, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-amber-600 text-white text-sm px-4 py-2">
      {/* Top Row: Phone (left) + Email (right) */}
      <div className="flex justify-between items-center">
        <a
          href="tel:+254787530331"
          className="flex items-center hover:text-gray-200 transition"
        >
          <Phone className="w-4 h-4 mr-1" />
          +254787530331
        </a>
        <a
          href="mailto:info@rabacarecenter.co.ke"
          className="flex items-center hover:text-gray-200 transition"
        >
          <Mail className="w-4 h-4 mr-1" />
          info@rabacarecenter.co.ke
        </a>
      </div>

      {/* Bottom Row: Socials (mobile: below, desktop: right-aligned) */}
      <div className="mt-2 flex justify-center md:justify-end space-x-4">
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
