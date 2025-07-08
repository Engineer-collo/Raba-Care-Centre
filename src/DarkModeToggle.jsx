import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-white text-black dark:text-white"
      title="Toggle Dark Mode"
    >
      {darkMode ? (
        <>
          <FaSun />
          <span>Light</span>
        </>
      ) : (
        <>
          <FaMoon />
          <span>Dark</span>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
