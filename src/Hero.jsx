import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden px-4 sm:px-6"
    >
      {/* Background Image */}
      <img
        src="/photo.png"
        alt="Redempta Kanja Global"
        className="absolute inset-0 w-full h-full object-cover brightness-110 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 py-16 sm:py-24 md:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-amber-400 drop-shadow">
          Welcome to Redempta Kanja Global
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed bg-black/30 dark:bg-white/10 p-4 sm:p-6 rounded-xl shadow-lg mx-auto max-w-3xl">
          <strong className="block mb-2">
            Empowering individuals, teams, and organizations to unlock purpose, shift mindsets, and maximize potential.
          </strong>
          At RK Global, we help you move from <em>confusion to clarity</em> and from <em>survival to significance</em> through tailored coaching, transformative training, and intentional mentorship.
          <br /><br />
          Whether through one-on-one sessions, group workshops, dynamic seminars, power talks, or team-building experiences — we develop the whole person: <strong>mindset, skills, spirit, and strategy</strong>.
          <br /><br />
          <q className="italic block text-amber-300">
            Your level of success will rarely exceed your level of personal development.
          </q>
          <br />
          We equip you to take full ownership of your growth journey and achieve measurable transformation: enhanced performance, greater resilience, lasting joy, and meaningful impact.
          <br /><br />
          Growth starts with one courageous step. Are you ready?
        </p>

        <a
          href="#book"
          className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          Book a Clarity Call
        </a>
      </div>
    </section>
  );
};

export default Hero;
