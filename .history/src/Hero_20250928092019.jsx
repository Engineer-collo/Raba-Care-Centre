import React, { useEffect, useState } from "react";
import IntroVideo from "./IntroVideo";

const defaultHero = {
  background_pic_url: "/hero-photo.png",
  white_text: "Compassionate Care",
  orange_text: "When You Need It Most",
  description:
    "At Raba Care Center, we provide exceptional healthcare services with a personal touch. Our dedicated team is committed to your well-being, offering comprehensive care in a warm and welcoming environment.",
  action_button: "Book appointment",
};

const Hero = () => {
  const [hero, setHero] = useState(defaultHero);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/heros");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setHero({ ...defaultHero, ...data[0] });
        } else {
          console.warn("Hero data is empty:", data);
        }
      } catch (err) {
        console.error("Failed to fetch hero:", err);
      }
    };

    fetchHero();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen md:h-[85vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white bg-cover bg-center scroll-mt-[100px] pt-20"
      style={{ backgroundImage: `url('${hero.background_pic_url}')` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left space-y-6 py-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {hero.white_text}
          <br />
          <span className="text-amber-400">{hero.orange_text}</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-200">
          {hero.description}
        </p>

        {/* CTA buttons row */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-xl shadow-md transition duration-300"
          >
            {hero.action_button}
          </a>
          <IntroVideo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
