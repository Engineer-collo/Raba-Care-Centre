import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Couple coaching",
    "Trauma Therapy",
    "Teens Mentorship",
    
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-12 mt-12 footer bg-maroon-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold text-white">
                Raba Care Center
              </span>
            </div>
            <p className="text-maroon-200 mb-6 leading-relaxed">
              Providing exceptional healthcare services with compassion,
              expertise, and a commitment to improving lives in our community
              for over a decade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-maroon-800 hover:bg-amber-400 p-2 rounded-lg transition-all duration-300 hover:text-maroon-900"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-maroon-200 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("#subscription")}
                  className="text-maroon-200 hover:text-amber-400 transition-colors duration-300"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-maroon-200 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-maroon-200 text-sm">123 Healthcare Drive</p>
                  <p className="text-maroon-200 text-sm">Medical District</p>
                  <p className="text-maroon-200 text-sm">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <p className="text-maroon-200 text-sm">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <p className="text-maroon-200 text-sm">
                  info@rabacarecenter.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-maroon-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-maroon-300 text-sm mb-4 md:mb-0">
              © 2025 Raba Care Center. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-maroon-300 hover:text-amber-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-maroon-300 hover:text-amber-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
              <span className="text-maroon-300 text-sm">
                Built with ❤️ by{" "}
                <a
                  href="https://portfolio-five-beta-49.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit portfolio of Eng. Collins Likhomba"
                  className="text-amber-400 font-semibold hover:text-white transition-colors"
                >
                  Eng. Collins Likhomba
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
