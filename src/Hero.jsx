import React, { useEffect, useState } from 'react';

const defaultHero = {
  background_pic_url: '/photo.png',
  white_text: "Let's Transform Your Life With",
  orange_text: 'Personalized Coaching Sessions',
  description:
    'Learn proven tactics, master the mindset, and get real results. Whether it’s achieving your goals, gaining confidence, or finding fulfillment — you’re in the right place.',
  action_button: 'Book a Clarity Call',
};

const Hero = () => {
  const [hero, setHero] = useState(defaultHero);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/heros');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setHero({ ...defaultHero, ...data[0] });
        } else {
          console.warn('Hero data is empty:', data);
        }
      } catch (err) {
        console.error('Failed to fetch hero:', err);
      }
    };

    fetchHero();
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-20 relative h-[85vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white bg-cover bg-center"
      style={{ backgroundImage: `url('${hero.background_pic_url}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-700 bg-opacity-80 z-0" />

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left space-y-6 py-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {hero.white_text}
          <br />
          <span className="text-amber-400">{hero.orange_text}</span>
        </h1>
        <p className="text-lg text-gray-200">
          {hero.description}
        </p>
        <a
          href="#book"
          className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          {hero.action_button}
        </a>
      </div>
    </section>
  );
};

export default Hero;
