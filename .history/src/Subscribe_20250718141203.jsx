import React, { useState } from 'react';
import { showSuccessToast, showErrorToast } from './Toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        showSuccessToast(data.message || 'Subscribed successfully!');
        setEmail('');
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
    <section>
    <div className="bg-white dark:bg-gray-900 py-8 px-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Subscribe to our newsletter
      </h2>
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
          className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
    
  );
};

export default Subscribe;
