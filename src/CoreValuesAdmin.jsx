import React, { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/core-values';

const CoreValuesAdmin = () => {
  const [coreValues, setCoreValues] = useState([]);
  const [newValue, setNewValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    fetchCoreValues();
  }, []);

  const fetchCoreValues = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCoreValues(data);
    } catch (err) {
      console.error('Failed to fetch core values', err);
    }
  };

  const handleAdd = async () => {
    if (!newValue.trim()) return;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ core_value: newValue }),
      });

      if (res.ok) {
        const created = await res.json();
        setCoreValues([created, ...coreValues]);
        setNewValue('');
      }
    } catch (err) {
      console.error('Error creating core value', err);
    }
  };

  const handleEdit = (id, currentValue) => {
    setEditingId(id);
    setEditValue(currentValue);
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ core_value: editValue }),
      });

      if (res.ok) {
        const updated = await res.json();
        setCoreValues(coreValues.map(cv => (cv.id === id ? updated : cv)));
        setEditingId(null);
        setEditValue('');
      }
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this core value?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setCoreValues(coreValues.filter(cv => cv.id !== id));
      }
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Core Values Admin</h2>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Enter new core value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="border dark:border-gray-700 px-3 py-2 rounded w-full dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
        >
          Add
        </button>
      </div>

      <ul className="space-y-4">
        {coreValues.map(cv => (
          <li key={cv.id} className="flex justify-between items-center border p-3 rounded dark:border-gray-700 dark:bg-gray-800">
            {editingId === cv.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border px-2 py-1 rounded w-full mr-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <button
                  onClick={() => handleUpdate(cv.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 dark:hover:bg-green-400"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="text-lg">{cv.core_value}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(cv.id, cv.core_value)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 dark:hover:bg-yellow-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cv.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 dark:hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoreValuesAdmin;
