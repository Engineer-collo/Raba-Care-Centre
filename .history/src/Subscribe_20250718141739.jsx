import React, { useState, useEffect } from 'react';
import { showSuccessToast, showErrorToast } from './Toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  // Fetch count from DB on mount
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/subscribe')
      .then((res) => res.json())
      .then((data) => {
        if (data.count !== undefined) {
          setCount(data.count);
        }
      })
      .catch((err) => console.error('Failed to fetch count:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      showErrorToast('Email is required');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        showSuccessToast(data.message || 'Subscribed!');
        setEmail('');
        // Refresh count
        setCount((prev) => prev + 1);
      } else {
        showErrorToast(data.error || 'Subscription failed');
      }
    } catch (error) {
      showErrorToast('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Already <span className="text-amber-400 font-semibold">{count}</span> subscribers!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-md transition duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
