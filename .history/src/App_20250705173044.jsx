import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { FaHome, FaInfoCircle, FaBriefcase, FaBlog, FaCalendarAlt, FaEnvelope,  } from 'react-icons/fa';
import { FaFacebookF,FaYoutube,FaPenNib, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRocket } from '@fortawesome/free-solid-svg-icons';



const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-gray-800 font-sans">

 <section
  id="home"
  className="py-8 relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden"
 >
  {/* Background Image */}
  <img
    src="/photo.png"
    alt="Redempta Kanja Global"
    className="absolute inset-0 w-full h-full object-cover opacity-150 z-5"
  />

  {/* Overlay (for a clean dark filter) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 z-0"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-5xl px-6 text-center space-y-8">
    <h1 className="text-4xl md:text-5xl font-bold leading-snug text-amber-400 drop-shadow">
      Welcome to Redempta Kanja Global
    </h1>

    <p className="text-lg md:text-xl text-gray-400 leading-relaxed bg-black bg-opacity-10 p-6 rounded-xl shadow-lg">
      <strong className="text-gray-360">Your trusted partner in unlocking purpose, shifting mindsets, and realizing full potential.</strong>
      <br /><br />
      We empower individuals, teams, and organizations to move from <em>confusion → clarity</em>, and from <em>survival → significance</em>.
      Through coaching, training, and mentorship — via one-on-one sessions, workshops, seminars, power talks, 
      and team-building — we address the total you: <strong>mindset, skills, spirit, and strategy</strong>.
      <br /><br />
      As Hal Elrod said: <q>Your level of success will rarely exceed your level of personal development.</q>
      <br /><br />
      At RK Global, we guide you to take ownership of your growth and experience transformational results: 
      increased productivity, resilience, joy, and high-impact performance.
      <br /><br />
      Whether you’re inspired to grow or desperate for change — the journey begins with a single decision.
    </p>

    <a
      href="#book"
      className="bg-amber-400 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full shadow-lg transition"
    >
      Book a Clarity Call
    </a>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-16 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-center ">About Rk Global</h2>

  <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
  RK Global is a purpose-driven coaching and training consultancy that empowers 
  individuals and organizations to awaken boldness, defy limitations, and lead lives of impact.
We are the launchpad for dreamers, leaders, and legacy-builders — equipping them to rise above fear, 
patterns, and resistance and take radical ownership of their journey.
Through high-impact coaching, transformational training, thought-provoking speaking, 
team building and creative storytelling, we raise warriors who refuse to settle, shrink, or apologize for their greatness.

  </p>

  <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Vision Card */}
    <div className="border border-indigo-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition">
      <h3 className="text-center font-semibold text-xl mb-3">     
         <FontAwesomeIcon icon={faGlobe} className='px-2' />
      Our Vision</h3>
      <p className="text-gray-600 leading-relaxed">
      To awaken a fearless generation of individuals and teams who break limitations, confront mediocrity, and rise with clarity, 
      courage, and conviction — building purpose-driven lives that leave a mark and disrupt the status quo</p>
    </div>

{/* Mission Card */}
<div className="border border-indigo-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition">
  <h3 className="text-center font-semibold text-xl mb-3">
    <FontAwesomeIcon icon={faRocket} className="px-2 text-indigo-500" />
    Our Mission
  </h3>
  <p className="text-gray-600 leading-relaxed">
    We challenge individuals and teams to break free from internal and external limitations, 
    take personal leadership, unlock their potential, and build purpose-driven lives.
  </p>
</div>

{/* Core Values Card */}
<div className="flex justify-center">
  <div className="border border-indigo-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition w-full max-w-md text-center">
    <h3 className="font-semibold text-xl mb-6">Our Core Values</h3>
    
    <ul className="space-y-4 text-gray-700 flex flex-col items-center">
      <li className="flex items-center gap-3 justify-center">
        <span className="text-amber-500 text-xl">🙏</span>
        <span>God First</span>
      </li>
      <li className="flex items-center gap-3 justify-center">
        <span className="text-amber-500 text-xl">💪</span>
        <span>Hard Work</span>
      </li>
      <li className="flex items-center gap-3 justify-center">
        <span className="text-amber-500 text-xl">📏</span>
        <span>Discipline</span>
      </li>
      <li className="flex items-center gap-3 justify-center">
        <span className="text-amber-500 text-xl">🚀</span>
        <span>Execution</span>
      </li>
      <li className="flex items-center gap-3 justify-center">
        <span className="text-amber-500 text-xl">🏛️</span>
        <span>Legacy</span>
      </li>
    </ul>
  </div>
</div>

  </div>
</section>
  

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What we Offer</h2>
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

      <section id='products' className="py-12 px-6 max-w-6xl mx-auto text-center bg-gray-50">
  <h2 className="text-4xl font-bold mb-12 text-gray-800">Books by Redempta Kanja</h2>
  <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto pb-12">
  Each of these books is a movement — a bold call to rise, reclaim your identity, 
  unlock your purpose, and take radical responsibility for your life.
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
      <h4 className="font-semibold text-xl mb-3 text-gray-800">Find Adopt Live Your Purpose</h4>
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

{/* Meet Our Team Section */}
<section id id="team" className="py-16 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
  <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-10">
    Behind every transformational experience at RK Global is a powerhouse team committed to excellence, authenticity, and impact.
  </p>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {/* Team Member 1 */}
    <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
      <img
        src="/redempta.png"
        alt="Redempta Kanja"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-amber-400"
      />
      <h3 className="text-xl font-semibold text-gray-800">Redempta Kanja</h3>
      <p className="text-sm text-gray-600 mb-2">Founder & Lead Coach</p>
      <p className="text-gray-700 text-sm">
        Passionate about unlocking purpose, Redempta has helped hundreds step into boldness and significance.
      </p>
    </div>

    {/* Team Member 2 */}
    <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
      <img
        src="/james.png"
        alt="Team Member"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-amber-400"
      />
      <h3 className="text-xl font-semibold text-gray-800">James Mwangi</h3>
      <p className="text-sm text-gray-600 mb-2">Strategy & Training Lead</p>
      <p className="text-gray-700 text-sm">
        James brings clarity and structure to our programs, with years of experience in leadership development.
      </p>
    </div>

    {/* Team Member 3 */}
    <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
      <img
        src="/sarah.png"
        alt="Team Member"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-amber-400"
      />
      <h3 className="text-xl font-semibold text-gray-800">Sarah Wambui</h3>
      <p className="text-sm text-gray-600 mb-2">Programs & Client Success</p>
      <p className="text-gray-700 text-sm">
        Sarah ensures every client feels seen, heard, and supported throughout their transformation journey.
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
        <a href="#contact" className="bg-white text-yellow-400 px-6 py-3 rounded-full hover:text-white hover:bg-amber-600">
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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.731409511709!2d36.76350071224031!3d-1.207134130501369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f22b36e1fe5f9%3A0xea7d820876f42a71!2sRuaka!5e0!3m2!1sen!2ske!4v1751703103025!5m2!1sen!2ske" 
  width="100%" 
  height="300" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      </div>

{/* Footer bottom */}
<div className="mt-10 text-center text-gray-400">
  © 2025 Rk-Globals. All rights reserved. <br />
  This Website was Built with ❤️ by{" "}
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
  </>

  );
};

export default HomePage;
