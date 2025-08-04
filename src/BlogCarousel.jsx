import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const defaultBlogData = [
  {
    id: 0,
    name: "Steps to Discover Your Life Purpose",
    blog_text:
      "This guide will help you navigate confusion, embrace clarity, and start walking confidently toward your true calling.",
    picture_url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    id: 1,
    name: "From Stuck to Called: My Journey",
    blog_text:
      "A raw and powerful testimony of moving from fear to faith — and finding freedom in purpose.",
    picture_url: "https://images.pexels.com/photos/7578807/pexels-photo-7578807.jpeg",
  },
];

const BlogCarousel = () => {
  const [blogs, setBlogs] = useState(defaultBlogData); // fallback default data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  const total = blogs.length;

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setBlogs(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => nextBlog(), 6000);
    return () => clearInterval(interval);
  }, [blogs]);

  const nextBlog = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setAnimate(false);
    }, 300);
  };

  const prevBlog = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
      setAnimate(false);
    }, 300);
  };

  if (loading) {
    return (
      <section className="py-16 px-6 bg-indigo-50 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">From the Blog</h2>
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </section>
    );
  }

  const { name, blog_text, picture_url } = blogs[currentIndex];

  return (
    <section className="scroll-mt-20 py-16 px-6 bg-indigo-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        From the Blog
      </h2>

      <div className="relative max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            animate ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <img
            src={picture_url}
            alt={name}
            className="w-full h-64 object-cover object-center"
          />

          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-amber-400">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {blog_text}
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
