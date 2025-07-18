import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogData = [
  {
    title: "Steps to Discover Your Life Purpose",
    summary:
      "This guide will help you navigate confusion, embrace clarity, and start walking confidently toward your true calling.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    title: "From Stuck to Called: My Journey",
    summary:
      "A raw and powerful testimony of moving from fear to faith — and finding freedom in purpose.",
    image: "https://images.pexels.com/photos/7578807/pexels-photo-7578807.jpeg",
  },
  {
    title: "What’s Holding You Back?",
    summary:
      "Identify and release limiting beliefs, toxic habits, and negative narratives that block your growth.",
    image: "https://images.pexels.com/photos/6707207/pexels-photo-6707207.jpeg",
  },
  {
    title: "Rise and Rebuild After Failure",
    summary:
      "Failure is not the end — it's a lesson. Learn how to rise stronger, wiser, and more resilient.",
    image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg",
  },
  {
    title: "The Power of Intentional Living",
    summary:
      "Live by design, not default. Discover how intentional choices transform your relationships, health, and leadership.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
];

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const total = blogData.length;

  const nextBlog = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setAnimate(false);
    }, 300); // match animation duration
  };

  const prevBlog = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
      setAnimate(false);
    }, 300);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextBlog, 6000);
    return () => clearInterval(interval);
  }, []);

  const { title, summary, image } = blogData[currentIndex];

  return (
    <section id="blog" className="scroll-mt-20 py-16 px-6 bg-indigo-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        From the Blog
      </h2>

      <div className="relative max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-md overflow-hidden">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            animate ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover object-center"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-amber-400">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {summary}
            </p>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevBlog}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white p-2 rounded-full shadow hover:bg-amber-400 hover:text-white transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextBlog}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white p-2 rounded-full shadow hover:bg-amber-400 hover:text-white transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default BlogCarousel;
