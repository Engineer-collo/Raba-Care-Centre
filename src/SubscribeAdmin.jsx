import React, { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/subscribes';

const SubscribeAdmin = () => {
  const [subscribes, setSubscribes] = useState([]);

  useEffect(() => {
    const fetchSubscribes = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSubscribes(data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscribes();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Subscribers</h2>
      {subscribes.length === 0 ? (
        <p>No subscribers found.</p>
      ) : (
        <ul className="space-y-2">
          {subscribes.map((sub) => (
            <li  key={sub.id} className="list-decimal border-b pb-2">
              {sub.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubscribeAdmin;
