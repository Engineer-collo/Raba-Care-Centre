import React, { useState, useEffect } from 'react';
import { showSuccessToast, showErrorToast } from './Toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/subscribe/count')
      .then((res) => res.json())
      .then((data) => {
        if (data.count !== undefined) setCount(data.count);
      })
      .catch((err) => {
        console.error('Error fetching count:', err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      showErrorToast('Please enter your email.');
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
        setCount((prev) => prev + 1);
      } else {
        showErrorToast(data.error || 'Subscription failed.');
      }
    } catch (error) {
      showErrorToast('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-2xl shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        Subscribe to our Newsletter
      </h2>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Join <span className="text-amber-400 font-bold">{count}</span> others who subscribed.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
