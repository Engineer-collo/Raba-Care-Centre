import React, { useState, useEffect } from 'react';
import { showSuccessToast, showErrorToast } from './Toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emails, setEmails] = useState([]); // store all subscribed emails

  // Fetch all subscribed emails on mount
  const fetchEmails = () => {
    fetch('http://127.0.0.1:8000/api/subscribe')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEmails(data);
        }
      })
      .catch(() => {
        console.error('Failed to fetch subscribers');
      });
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
      const response = await fetch('http://127.0.0.1:8000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        showSuccessToast(data.message || 'Subscribed successfully!');
        setEmail('');
        fetchEmails(); // re-fetch the list after adding
      } else {
        showErrorToast(data.error || 'Failed to subscribe.');
      }
    } catch (error) {
      showErrorToast('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-8 px-4 rounded-xl shadow-md transition-colors">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        Subscribe to our Newsletter
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Join <span className="text-amber-400 font-semibold">{emails.length}</span> other subscribers!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-500 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
