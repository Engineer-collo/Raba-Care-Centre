import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaBlog,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPenNib,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-black py-10 px-6 text-sm relative">
      {/* Feedback link in top-right */}
      <div className="absolute top-4 right-4">
        <Link
          to="/feedback"
          className="hover:text-amber-400 flex items-center gap-2 text-sm"
        >
          <FaInfoCircle className=" text-xl text-red-500" />
          Your Feedback
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-amber-400 flex items-center gap-2">
                <FaHome className="text-gray-400 text-lg" />
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 flex items-center gap-2">
                <FaInfoCircle className="text-gray-400 text-lg" />
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-amber-400 flex items-center gap-2">
                <FaBriefcase className="text-gray-400 text-lg" />
                My Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-amber-400 flex items-center gap-2">
                <FaBlog className="text-gray-400 text-lg" />
                Blog
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-amber-400 flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400 text-lg" />
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 flex items-center gap-2">
                <FaEnvelope className="text-gray-400 text-lg" />
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="space-y-4">
            <a
              href="https://www.facebook.com/profile.php?id=100090757403548"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/redemta-aseyo-814b1979/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/redemptakanja/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://substack.com/@redemptakanja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-600 transition-colors"
            >
              <FaPenNib /> Substack
            </a>
            <a
              href="https://www.youtube.com/@REDEMPTAKANJA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              <FaYoutube /> YouTube
            </a>
            <a
              href="https://www.tiktok.com/@redempta.kanja?_t=ZM-8xkr1WWvoog&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              <SiTiktok /> TikTok
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.731409511709!2d36.76350071224031!3d-1.207134130501369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f22b36e1fe5f9%3A0xea7d820876f42a71!2sRuaka!5e0!3m2!1sen!2ske!4v1751703103025!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Ruaka"
            />
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400 dark:text-gray-500">
  © {new Date().getFullYear()} Redempta Kanja Global. All rights reserved. <br />
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
</div>
    </footer>
  );
};

export default Footer;
