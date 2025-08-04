import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const fallbackQuotes = [
  {
    testimonial_text: "You are destined for greatness! Don't let your circumstances lead to self-sabotage.",
    testimony_author: "Redempta Kanja",
  },
  {
    testimonial_text: "Learn to walk away from those who dim your light... seek environments that inspire your dreams.",
    testimony_author: "Redempta Kanja",
  },
  {
    testimonial_text: "Your level of success will rarely exceed your level of personal development.",
    testimony_author: "Hal Elrod",
  },
];

const DailyInspiration = () => {
  const [quotes, setQuotes] = useState(fallbackQuotes);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/testimonials');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setQuotes(data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials, using fallback quotes.", error);
      }
    };

    fetchQuotes();
  }, []);

  const nextQuote = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
      setAnimate(false);
    }, 300);
  };

  const prevQuote = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
      setAnimate(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextQuote, 6000);
    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <section id='inspiration' className='scroll-mt-24'>
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 max-w-xl mx-auto my-10 text-center transition duration-300">
        <h2 className="text-2xl font-semibold text-amber-600 dark:text-amber-400 mb-4">Daily Inspiration</h2>

        <div
          className={`transform transition-transform duration-300 ${
            animate ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <p className="text-lg italic text-gray-800 dark:text-white">
            “{quotes[index]?.testimonial_text || "Stay inspired!"}”
          </p>
          <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            — {quotes[index]?.testimony_author || "Redempta Kanja"}
          </p>
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
