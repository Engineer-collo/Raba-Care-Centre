import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const quotes = [
  {
    quote: "You are destined for greatness! Don't let your circumstances lead to self-sabotage.",
    author: "Redempta Kanja",
  },
  {
    quote: "Learn to walk away from those who dim your light... seek environments that inspire your dreams.",
    author: "Redempta Kanja",
  },
  {
    quote: "Your level of success will rarely exceed your level of personal development.",
    author: "Hal Elrod",
  },
];

const DailyInspiration = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextQuote = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
      setAnimate(false);
    }, 300); // matches the duration of the animation
  };

  const prevQuote = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
      setAnimate(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextQuote, 6000); // auto change every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='inspiration' className='scroll-mt-24'>
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 max-w-xl mx-auto my-10 text-center transition duration-300">
        <h2 className="text-2xl font-semibold text-amber-600 dark:text-amber-400 mb-4">Daily Inspiration</h2>

        <div
          className={`transform transition-transform duration-300 ${
            animate ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <p className="text-lg italic text-gray-800 dark:text-gray-200">“{quotes[index].quote}”</p>
          <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">— {quotes[index].author}</p>
        </div>

        <div className="mt-6 flex justify-center space-x-6">
          <button
            onClick={prevQuote}
            className="p-2 bg-amber-400 hover:bg-amber-500 text-white rounded-full shadow-md transition"
            aria-label="Previous quote"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextQuote}
            className="p-2 bg-amber-400 hover:bg-amber-500 text-white rounded-full shadow-md transition"
            aria-label="Next quote"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyInspiration;
