import React, { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/abouts';

const AboutAdmin = () => {
  const [abouts, setAbouts] = useState([]);
  const [form, setForm] = useState({
    about_text: '',
    vision_text: '',
    mission_text: '',
  });

  const fetchAbouts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setAbouts(data);
    } catch (error) {
      console.error('Error fetching abouts:', error);
    }
  };

  useEffect(() => {
    fetchAbouts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { about_text, vision_text, mission_text } = form;

    if (!about_text || !vision_text || !mission_text) {
      alert('All fields are required.');
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to create about entry');

      const newAbout = await res.json();
      setAbouts([newAbout, ...abouts]);
      setForm({ about_text: '', vision_text: '', mission_text: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this about entry?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete entry');

      setAbouts(abouts.filter((a) => a.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">About Section Admin Panel</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded shadow"
      >
        <textarea
          name="about_text"
          placeholder="About Text"
          value={form.about_text}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <textarea
          name="vision_text"
          placeholder="Vision Text"
          value={form.vision_text}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <textarea
          name="mission_text"
          placeholder="Mission Text"
          value={form.mission_text}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
        >
          Add About Entry
        </button>
      </form>

      <div className="space-y-4">
        {abouts.map((about) => (
          <div
            key={about.id}
            className="border p-4 rounded shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <p><strong>About:</strong> {about.about_text}</p>  <br/>
            <p><strong>Vision:</strong> {about.vision_text}</p> <br/>
            <p><strong>Mission:</strong> {about.mission_text}</p>
            <button
              onClick={() => handleDelete(about.id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 dark:hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAdmin;
