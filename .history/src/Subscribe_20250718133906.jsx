// src/components/Subscribe.jsx
import React, { useState, useEffect } from 'react';
import { showSuccessToast, showErrorToast } from './Toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscriberCount, setSubscriberCount] = useState(0);

  const fetchSubscriberCount = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe');
      if (!response.ok) throw new Error('Failed to fetch subscriber count');
      const data = await response.json();
      setSubscriberCount(data.length || 0);
    } catch (error) {
      showErrorToast('Error loading subscriber count');
    }
  };

  useEffect(() => {
    fetchSubscriberCount();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      showErrorToast('Please enter a valid email');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Subscription failed');
      }

      showSuccessToast('Subscribed successfully!');
      setEmail('');
      fetchSubscriberCount();
    } catch (error) {
      showErrorToast(error.message);
    }
  };

  return (
    <section className="bg-amber-50 py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold text-amber-700 mb-4">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded border border-amber-300 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <button
          type="submit"
          className="bg-amber-400 text-white px-6 py-2 rounded hover:bg-amber-500 transition duration-300"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-amber-600">{subscriberCount} people have subscribed</p>
    </section>
  );
};

export default Subscribe;
