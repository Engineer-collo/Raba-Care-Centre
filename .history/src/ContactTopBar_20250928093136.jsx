import React from "react";
import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-amber-600 text-white text-sm px-4 py-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Phone + Email */}
        <div className="flex justify-between md:justify-start md:space-x-6">
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
      </div>
    </div>
  );
};

export default TopBar;
