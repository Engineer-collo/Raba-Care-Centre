import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import Testimonials from './Testimonials';
import BlogCarousel from './BlogCarousel';
import { FaHome, FaInfoCircle, FaBriefcase, FaBlog, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaYoutube, FaPenNib, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-sans">
      <Navbar />

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden px-4 sm:px-6"
      >
        <img
          src="/photo.png"
          alt="Redempta Kanja Global"
          className="absolute inset-0 w-full h-full object-cover brightness-110 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-0"></div>
        <div className="relative z-10 max-w-4xl w-full text-center space-y-6 py-16 sm:py-24 md:py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-amber-400 drop-shadow">
            Welcome to Redempta Kanja Global
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed bg-black/30 dark:bg-white/10 p-4 sm:p-6 rounded-xl shadow-lg mx-auto max-w-3xl">
            <strong className="block mb-2">Your trusted partner in unlocking purpose, shifting mindsets, and realizing full potential.</strong>
            We empower individuals, teams, and organizations to move from <em>confusion → clarity</em>, and from <em>survival → significance</em>.<br />
            Through coaching, training, and mentorship — via one-on-one sessions, workshops, seminars, power talks, and team-building — we address the total you: <strong>mindset, skills, spirit, and strategy</strong>.
            <br /><br />
            <q className="italic block text-amber-300">Your level of success will rarely exceed your level of personal development.</q>
            <br />
            At RK Global, we guide you to take ownership of your growth and experience transformational results: increased productivity, resilience, joy, and high-impact performance.
            <br /><br />
            Whether you’re inspired to grow or desperate for change — the journey begins with a single decision.
          </p>
          <a
            href="#book"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Book a Clarity Call
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">About Rk Global</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          RK Global is a purpose-driven coaching and training consultancy that empowers individuals and organizations to awaken boldness...
        </p>
        <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
            <h3 className="text-center font-semibold text-xl mb-3">
              <FontAwesomeIcon icon={faGlobe} className='px-2' />
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To awaken a fearless generation of individuals and teams...
            </p>
          </div>
          <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
            <h3 className="text-center font-semibold text-xl mb-3">
              <FontAwesomeIcon icon={faRocket} className="px-2 text-indigo-500" />
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We challenge individuals and teams to break free from internal and external limitations...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="border border-indigo-200 dark:border-indigo-600 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition w-full max-w-md text-center">
              <h3 className="font-semibold text-xl mb-6">Our Core Values</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300 flex flex-col items-center">
                <li className="flex items-center gap-3 justify-center">
                  <span className="text-amber-500 text-xl">🙏</span>
                  <span>God First</span>
                </li>
                {/* ... other values ... */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What we Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            '/teens.png',
            '/author-support.png',
            '/coaching-session.png',
            '/group-coaching.png',
            '/corporate-training.png',
            '/couples-coaching.png',
          ].map((src, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 overflow-hidden">
              <img
                className="w-full max-h-[500px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
                src={src}
                alt="Service"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT, BLOG, TEAM, TESTIMONIALS, FOOTER (wrap with dark-aware styles) */}
      <BlogCarousel />
      <Testimonials />
      <section id="contact"><Contact /></section>

      <footer className="bg-gray-900 text-white dark:bg-black py-10 px-6 text-sm">
        {/* ... keep your existing footer ... */}
        <div className="mt-10 text-center text-gray-400">
          © 2025 Rk-Globals. All rights reserved. <br />
          Built with ❤️ by{" "}
          <a
            href="https://portfolio-five-beta-49.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 font-semibold hover:text-white"
          >
            Engineer Collins
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
