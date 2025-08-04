import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';

const ProtectedAdmin = () => {
  const [authorized, setAuthorized] = useState(false);
  const [secret, setSecret] = useState('');
  const [adminName, setAdminName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/verify-admin-secret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret }),
      });

      const data = await response.json();

      if (data.authorized) {
        setAuthorized(true);
      } else {
        alert('Invalid admin secret.');
      }
    } catch (error) {
      alert('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (authorized) return <AdminDashboard adminName={adminName} />;

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleVerify}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-extrabold text-center mb-6 text-blue-600 uppercase tracking-wider">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Admin Name"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          required
          className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white"
        />

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          required
          className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? 'Verifying...' : 'Enter'}
        </button>
      </form>
    </div>
  );
};

export default ProtectedAdmin;
