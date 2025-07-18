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
        fetchCount(); // Refresh count
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
    <div className="bg-white shadow-md p-6 rounded-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded px-4 py-2"
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
      {message && <p className="text-sm mt-4 text-center text-gray-700">{message}</p>}
      <p className="text-center text-sm text-gray-500 mt-6">
        Current Subscribers: <span className="font-bold">{count}</span>
      </p>
    </div>
  );
};

export default Subscribe;
