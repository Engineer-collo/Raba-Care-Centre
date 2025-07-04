import React from 'react';
import Contact from './Contact';
import { FaHome, FaInfoCircle, FaBriefcase, FaBlog, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";



const HomePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="flex items-center gap-4 px-6 py-2">
  <img className="h-10 w-12 object-contain" src="/rk-logo.png" alt="Rk-Logo" />
  <div className="text-2xl font-bold text-yellow-600">Rk-Globals</div>
</div>

  <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
    <li>
      <a href="#home" className="hover:text-indigo-600 flex flex-col items-center text-sm">
        <FaHome className=" text-gray-500 text-2xl mb-1" />
        Home
      </a>
    </li>
    <li>
      <a href="#about" className="hover:text-indigo-600 flex flex-col items-center text-sm">
        <FaInfoCircle className="text-gray-500 text-2xl mb-1" />
        About
      </a>
    </li>
    <li>
      <a href="#services" className="hover:text-indigo-600 flex flex-col items-center text-sm">
        <FaBriefcase className="text-gray-500 text-2xl mb-1" />
        My Services
      </a>
    </li>
    <li>
      <a href="#blog" className="hover:text-indigo-600 flex flex-col items-center text-sm">
        <FaBlog className="text-gray-500 text-2xl mb-1" />
        Blog
      </a>
    </li>
    <li>
      <a href="#events" className="hover:text-indigo-600 flex flex-col items-center text-sm">
        <FaCalendarAlt className="text-gray-500 text-2xl mb-1" />
        Events
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-indigo-600 flex flex-col items-center text-sm">
        <FaEnvelope className="text-gray-500 text-2xl mb-1" />
        Contact
      </a>
    </li>
  </ul>

  <a href="#book" className="hidden md:block bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
    Book a Session
  </a>
</nav>

      {/* Hero Section with Image Behind Text */}
      <section id="home" className="relative h-[900px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="/photo.png" // 
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        {/* Hero Text Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Purpose. Live Fully.</h1>
          <p className="text-2xl mb-6 max-w-xl mx-auto">
            I’m Redempta Kanja, a Purpose Coach helping women align with their calling and live confidently.
          </p>
          <a href="#book" className="bg-amber-400 text-white px-6 py-3 rounded-full hover:bg-indigo-700">
            Book a Free Call
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Rk-Globals</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Rk-Globals is a faith-driven coaching platform focused on helping women discover clarity, purpose, and confidence.
          Through coaching, mentorship, and community, we support your journey toward a fulfilled life.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/*Teens */}
         <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden">
         <img
          className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
          src="/teens.png"
          alt="Teens coaching"
          />
          </div>

          {/*Author support */}
 <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden">
  <img
    className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
    src="/author-support.png"
    alt="Teens coaching"
  />
</div>

        {/* */}
        <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden">
  <img
    className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
    src="/coaching-session.png"
    alt="Teens coaching"
  />
</div>

        {/* */}
        <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden">
  <img
    className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
    src="/group-coaching.png"
    alt="Teens coaching"
  />
</div>

        {/* */}
        <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden">
  <img
    className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
    src="/corporate-training.png"
    alt="Teens coaching"
  />
</div>

        {/* */}
        <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden">
  <img
    className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
    src="/couples-coaching.png"
    alt="Teens coaching"
  />
</div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonies</h2>
        <blockquote className="italic text-lg text-gray-700">
          “Her guidance helped me break free from fear and walk boldly in my calling.” – Jane M.
        </blockquote>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center mb-8">From the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold text-lg mb-2">5 Steps to Discover Your Life Purpose</h4>
            <p className="text-sm text-gray-600">A guide to help you get unstuck and find clarity.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold text-lg mb-2">From Stuck to Called: My Journey</h4>
            <p className="text-sm text-gray-600">A powerful testimony of breakthrough and faith.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold text-lg mb-2">What’s Holding You Back?</h4>
            <p className="text-sm text-gray-600">Identify and release your mental roadblocks.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="book" className="text-center py-20 bg-amber-400 text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to live with purpose?</h2>
        <p className="mb-6 text-lg">
          Let’s work together to unlock your calling and build a life you love.
        </p>
        <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-gray-100">
          Book a Clarity Call
        </a>
      </section>

      <section id='contact'>
        <Contact/>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Vertical Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-indigo-500 flex items-center gap-2">
                <FaHome className="text-gray-400 text-lg" />
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-500 flex items-center gap-2">
                <FaInfoCircle className="text-gray-400 text-lg" />
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-500 flex items-center gap-2">
                <FaBriefcase className="text-gray-400 text-lg" />
                My Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-indigo-500 flex items-center gap-2">
                <FaBlog className="text-gray-400 text-lg" />
                Blog
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-indigo-500 flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400 text-lg" />
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 flex items-center gap-2">
                <FaEnvelope className="text-gray-400 text-lg" />
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* Embedded Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.47726118005!2d36.78196903881193!3d-1.1922710496990803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d2cc2119bdd%3A0xf05f4bef7d1af588!2sGuango%20Estate%2C%20Muchatha!5e0!3m2!1sen!2ske!4v1751631583808!5m2!1sen!2ske"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Our location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-gray-400">
        © 2025 Rk-Globals. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default HomePage;
