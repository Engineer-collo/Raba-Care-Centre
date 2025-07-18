import React, { useState, useEffect } from 'react';
import {showSuccessToast} from './'

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchCount = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe');
      const data = await response.json();
      setCount(data.length);
    } catch (error) {
      console.error('Failed to fetch subscribers:', error);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (email !== confirmEmail) {
      setError('Emails do not match');
      return;
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage('Subscribed successfully!');
        setEmail('');
        setConfirmEmail('');
        fetchCount();
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Subscription failed');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred.');
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-md max-w-md mx-auto mt-10 text-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-center">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Confirm your email"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded px-4 py-2"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="text-sm mt-4 text-green-500 text-center">{message}</p>}
      {error && <p className="text-sm mt-4 text-red-500 text-center">{error}</p>}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        Current Subscribers: <span className="font-bold">{count}</span>
      </p>
    </div>
  );
};

export default Subscribe;
