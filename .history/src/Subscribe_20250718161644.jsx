import React, { useState, useEffect } from 'react';
import { showSuccessToast, showErrorToast } from './Toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emails, setEmails] = useState([]);

  const fetchEmails = () => {
    fetch('https://redempta-website-s-backend.onrender.com//subscribe')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEmails(data);
      })
      .catch(() => console.error('Failed to fetch subscribers'));
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      showErrorToast('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://redempta-website-s-backend.onrender.com//subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        showSuccessToast(data.message || 'Subscribed successfully!');
        setEmail('');
        fetchEmails();
      } else {
        showErrorToast(data.error || 'Failed to subscribe.');
      }
    } catch {
      showErrorToast('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10 max-w-2xl mx-auto transition-colors duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Stay Updated
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-6">
        Join <span className="text-amber-400 font-semibold">{emails.length}</span> others and never miss a thing!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
