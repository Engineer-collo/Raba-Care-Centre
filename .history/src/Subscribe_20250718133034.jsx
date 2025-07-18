import React, { useState, useEffect } from 'react';
import { showSuccessToast, showErrorToast } from './Toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchSubscriberCount = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe');
      if (!response.ok) throw new Error('Failed to fetch subscribers');
      const data = await response.json();
      setSubscriberCount(data.length);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  useEffect(() => {
    fetchSubscriberCount();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !confirmEmail) {
      showErrorToast('Please fill in both email fields.');
      return;
    }

    if (email !== confirmEmail) {
      showErrorToast('Emails do not match.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Subscription failed.');
      }

      showSuccessToast('Subscribed successfully!');
      setEmail('');
      setConfirmEmail('');
      fetchSubscriberCount();
    } catch (error) {
      showErrorToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
        Subscribe to our Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Confirm your email"
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
        Total Subscribers: <span className="font-bold">{subscriberCount}</span>
      </p>
    </div>
  );
};

export default Subscribe;
