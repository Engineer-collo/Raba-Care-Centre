import React, { useState, useEffect } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

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
        fetchCount();
      } else {
        const errorData = await res.json();
        setMessage(errorData.message || 'Subscription failed');
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('An error occurred.');
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg p-6 rounded-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
        Subscribe to our Newsletter
      </h2>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded px-4 py-2 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p className="text-sm mt-4 text-center text-gray-700 dark:text-gray-300">
          {message}
        </p>
      )}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
        Current Subscribers: <span className="font-bold text-black dark:text-white">{count}</span>
      </p>
    </div>
  );
};

export default Subscribe;
