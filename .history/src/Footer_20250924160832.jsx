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
    { name: "Newsletter", href: "#subscription" },
  ];

  const services = ["Couple Coaching", "Trauma Therapy", "Teens Mentorship"];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-12 mt-12 bg-maroon-900 text-maroon-200">
      {/* Feedback Bar */}
      <div className="bg-maroon-800 p-4 text-left">
        <a
          href="feedback"
          className="text-amber-400 font-semibold hover:text-white transition-colors"
        >
          Leave Your Feedback
        </a>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold text-white">
                Raba Care Center
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              Providing exceptional healthcare services with compassion,
              expertise, and a commitment to improving lives in our community
              for over a decade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-maroon-800 hover:bg-amber-400 p-2 rounded-lg transition-all duration-300 hover:text-maroon-900 hover:scale-105"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-1" />
                <div>
                  <p>123 Healthcare Drive</p>
                  <p>Medical District</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <p>+</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <p>info@rabacarecenter.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-maroon-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-maroon-300 text-sm mb-4 md:mb-0">
              © 2025 Raba Care Center. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="privacy"
                  className="text-maroon-300 hover:text-amber-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="terms"
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
