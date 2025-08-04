import React, { useState, useEffect, useRef } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/services';

const ServicesAdmin = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ service_name: '', description: '', icon: null });
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error('Failed to fetch services', err);
    }
  };

  const handleAdd = async () => {
    if (!newService.service_name.trim() || !newService.description.trim()) return;

    const formData = new FormData();
    formData.append('service_name', newService.service_name);
    formData.append('description', newService.description);
    if (newService.icon) {
      formData.append('icon', newService.icon);
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const created = await res.json();
        setServices([created, ...services]);
        setNewService({ service_name: '', description: '', icon: null });

        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      }
    } catch (err) {
      console.error('Error creating service', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 dark:bg-gray-900 dark:text-white min-h-screen">
      {/* Hidden heading for accessibility */}
      <h2 className="sr-only">Admin - Manage Services</h2>

      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Service Name"
          value={newService.service_name}
          onChange={(e) => setNewService({ ...newService, service_name: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded"
        />

        <textarea
          placeholder="Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded"
        />

        <input
          type="file"
          onChange={(e) => setNewService({ ...newService, icon: e.target.files[0] })}
          ref={fileInputRef}
          className="w-full text-white dark:text-white"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
          disabled={loading}
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
          {loading ? 'Saving...' : 'Add Service'}
        </button>
      </div>

      <div className="space-y-4">
        {services.map((s) => (
          <div
            key={s.id}
            className="border p-4 rounded dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="text-lg font-semibold">{s.service_name}</h3>
            <p>{s.description}</p>
            {s.icon_url && (
              <img
                src={s.icon_url}
                alt={s.service_name}
                className="w-48 h-auto mt-2 rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAdmin;
