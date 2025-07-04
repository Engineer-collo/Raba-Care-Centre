import React from 'react';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { FaHome, FaInfoCircle, FaBriefcase, FaBlog, FaCalendarAlt, FaEnvelope,  } from 'react-icons/fa';
import { FaFacebookF,FaYoutube,FaPenNib, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';




const HomePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="flex items-center gap-1 px-6 py-2">
  <img className="h-10 w-12 object-contain" src="/rk-logo.png" alt="Rk-Logo" />
  <div className="text-2xl font-bold text-yellow-600">Rk-Global</div>
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
      <a href="#contact" className="hover:text-indigo-600 flex flex-col items-center text-sm">
        <FaEnvelope className="text-gray-500 text-2xl mb-1" />
        Contact
      </a>
    </li>
  </ul>

  <a href="#book" className="hidden md:block bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-400">
    Book a Session
  </a>
</nav>

      {/* Hero Section with Image Behind Text */}
      <section id="home" className="relative h-auto min-h-screen flex items-center justify-center text-center text-white overflow-hidden py-20">
  {/* Background Image */}
  <img
    src="/photo.png"
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Hero Content */}
  <div className="relative z-10 px-4 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
      Find Your Purpose. Live Fully.
    </h1>

    <p className="text-lg md:text-xl leading-relaxed text-gray-100 bg-black bg-opacity-40 p-6 rounded-lg shadow-lg mb-8">
      <span className="block mb-4">
        <strong>Redempta Kanja Global (RKG)</strong> is not just another consultancy firm — we are your dedicated partner in unlocking your full potential.
        We empower individuals, communities, and organizations to achieve their boldest dreams.
      </span>

      <span className="block mb-4">
        Our coaching programs are thoughtfully designed to inspire, train, and equip you through workshops, one-on-one sessions,
        seminars, power talks, and impactful team-building events.
      </span>

      <span className="block mb-4 italic">
        As Hal Elrod, author of <strong>"The Miracle Morning"</strong>, said: <q>Your level of success will rarely exceed your level of personal development.</q>
      </span>

      <span className="block mb-4">
        At RKG, we guide both individuals and teams to take full ownership of their growth — which in turn boosts productivity,
        reduces stress, increases joy, and leads to phenomenal success.
      </span>

      <span className="block mb-4">
        Whether you feel stuck or inspired for change, your transformation begins now. Choose to rise above and chase what once felt impossible.
      </span>

      <span className="block font-semibold text-amber-300 mt-4">
        It's time to take charge, level up, and thrive unapologetically!
      </span>
    </p>

    <a
      href="#book"
      className="bg-amber-400 hover:bg-amber-400 transition-colors px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
    >
      Book a Free Call
    </a>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-16 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-center ">About Rk-Globals</h2>

  <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
    Redempta Kanja Global is a training and coaching consultancy firm that empowers individuals 
    and organizations to achieve their fullest potential through one-on-one meetings, workshops/seminars, events, and team building.
  </p>

  <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Vision Card */}
    <div className="border border-indigo-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition">
      <h3 className="text-center font-semibold text-xl mb-3">Our Vision</h3>
      <p className="text-gray-600 leading-relaxed">
        To inspire and challenge millions of individuals to take charge, level up, and thrive unapologetically.
      </p>
    </div>

    {/* Mission Card */}
    <div className="border border-indigo-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition">
      <h3 className="text-center font-semibold text-xl mb-3">Our Mission</h3>
      <p className="text-gray-600 leading-relaxed">
        To equip, mentor, and coach professionals, business leaders, and students toward fulfilling and productive lives
        realized by taking charge of one’s personal and professional growth — bringing dreams to reality.
      </p>
    </div>

    {/* Core Values Card */}
    <div className="border border-indigo-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition">
      <h3 className="text-center font-semibold text-xl mb-3">Our Core Values</h3>
      <ul className="text-gray-600 list-disc pl-5 space-y-2">
        <li>God First</li>
        <li>Hard Work</li>
        <li>Discipline</li>
        <li>Execution</li>
        <li>Legacy</li>
      </ul>
    </div>
  </div>
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

      <section className="py-12 px-6 max-w-6xl mx-auto text-center bg-gray-50">
  <h2 className="text-4xl font-bold mb-12 text-gray-800">Books by Redempta Kanja</h2>
  <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto pb-12">
  Each of these books is a movement — a bold call to rise, reclaim your identity, unlock your purpose, and take radical responsibility for your life.
  They are tools for personal transformation. Dive in, reflect deeply, and allow these books to unravel your unfolding.
</p>


  <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
    
    {/* Book 1 */}
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm text-left">
      <a
        href="https://selar.com/w7e7g0"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-5"
      >
        <img
          className="rounded-lg h-48 mx-auto object-contain transition-transform duration-300 hover:scale-105"
          src="/find.png"
          alt="Find and Adopt Your Purpose"
        />
      </a>
      <h4 className="font-semibold text-xl mb-3 text-gray-800">Find & Adopt Your Purpose</h4>
      <p className="text-gray-700 text-sm leading-relaxed max-h-[360px] overflow-y-auto pr-1">
        This book is for anyone who has doubted their potential or settled for less. It’s a heartfelt reminder that
        discovering, embracing, and living your purpose is possible and necessary. Through practical tools, you'll:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
          <li>Identify and verify your true purpose</li>
          <li>Debunk myths that hold you back</li>
          <li>Position yourself confidently for fulfillment</li>
          <li>Develop healthy, purpose-driven habits</li>
        </ul>
        <br />
        Begin your journey to a bold, purposeful life — you deserve it!
      </p>
    </div>

    {/* Book 2 */}
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm text-left">
      <a
        href="https://selar.com/z74ln7"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-5"
      >
        <img
          className="rounded-lg h-48 mx-auto object-contain transition-transform duration-300 hover:scale-105"
          src="/taking-charge.png"
          alt="Taking Charge"
        />
      </a>
      <h4 className="font-semibold text-xl mb-3 text-gray-800">Taking Charge</h4>
      <p className="text-gray-700 text-sm leading-relaxed max-h-[360px] overflow-y-auto pr-1">
        A bold invitation to rise above fear, failures, and limits — "Taking Charge" helps you discover your authentic identity,
        rewrite your story, and ignite the gifts within you. You’ll learn how to:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
          <li>Transcend past pain and limitations</li>
          <li>Unlock your potential and influence</li>
          <li>Reclaim forgotten dreams</li>
          <li>Be a powerful force of transformation</li>
        </ul>
        <br />
        Step into your greatness — the world is waiting.
      </p>
    </div>

    {/* Book 3 */}
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm text-left">
      <a
        href="https://selar.com/477103"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-5"
      >
        <img
          className="rounded-lg h-48 mx-auto object-contain transition-transform duration-300 hover:scale-105"
          src="/princes.png"
          alt="Princes And Princesses"
        />
      </a>
      <h4 className="font-semibold text-xl mb-3 text-gray-800">Princes & Princesses</h4>
      <p className="text-gray-700 text-sm leading-relaxed max-h-[360px] overflow-y-auto pr-1">
        A modern-day book of proverbs for the next generation. Inspired by a mother’s love, it shares biblical wisdom to
        shape young lives. Children and parents alike will:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
          <li>Affirm identity and spiritual heritage</li>
          <li>Navigate life’s challenges with truth</li>
          <li>Develop purpose-filled character</li>
          <li>Grow with faith, wisdom, and grace</li>
        </ul>
        <br />
        This isn’t just a book — it’s a legacy of wisdom and identity.
      </p>
    </div>
    
  </div>
</section>

      {/* Testimonials */}
      <section className=" px-6 max-w-4xl mx-auto text-center">
        <div>
          <Testimonials/>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6 bg-indigo-50">
        <h2 className="text-3xl font-bold text-center mb-8">From the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-4 shadow rounded">
            <h4 className="font-semibold text-lg mb-2">Steps to Discover Your Life Purpose</h4>
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
        <a href="#contact" className="bg-white text--400 px-6 py-3 rounded-full hover:bg-gray-100">
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
              <FaYoutube /> Youtube
            </a>
            <a
              href="https://www.tiktok.com/@redempta.kanja?_t=ZM-8xkr1WWvoog&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              <SiTiktok /> Tiktok
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
