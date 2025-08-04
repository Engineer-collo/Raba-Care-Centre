import React, { useEffect, useState, useRef } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/heros';

const HeroAdmin = () => {
  const [heros, setHeros] = useState([]);
  const [form, setForm] = useState({
    white_text: '',
    orange_text: '',
    description: '',
    action_button: '',
    background_pic: null,
  });
  const fileInputRef = useRef(null);

  const fetchHeros = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setHeros(data);
    } catch (error) {
      console.error('Error fetching heros:', error);
    }
  };

  useEffect(() => {
    fetchHeros();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'background_pic') {
      setForm({ ...form, background_pic: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.background_pic) {
      alert('Background image is required');
      return;
    }

    const formData = new FormData();
    formData.append('white_text', form.white_text);
    formData.append('orange_text', form.orange_text);
    formData.append('description', form.description);
    formData.append('action_button', form.action_button);
    formData.append('background_pic', form.background_pic);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to create hero section');

      const newHero = await res.json();
      setHeros([newHero, ...heros]);

      // Reset form and file input
      setForm({
        white_text: '',
        orange_text: '',
        description: '',
        action_button: '',
        background_pic: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this hero section?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete hero');

      setHeros(heros.filter((hero) => hero.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Hero Admin Panel</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded shadow"
      >
        <input
          type="text"
          name="white_text"
          placeholder="White Text"
          value={form.white_text}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="text"
          name="orange_text"
          placeholder="Orange Text"
          value={form.orange_text}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="text"
          name="action_button"
          placeholder="Action Button Text"
          value={form.action_button}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="file"
          name="background_pic"
          onChange={handleChange}
          ref={fileInputRef}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          accept="image/*"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Create Hero
        </button>
      </form>

      <div className="space-y-4">
        {heros.map((hero) => (
          <div
            key={hero.id}
            className="border p-4 rounded shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <img
              src={hero.background_pic_url}
              alt="Hero background"
              className="w-48 h-auto border rounded"
              // className="w-full h-full object-cover rounded mb-2"
            />
            <h3 className="text-xl font-semibold">
              {hero.white_text}{' '}
              <span className="text-orange-500">{hero.orange_text}</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{hero.description}</p>
            <p className="text-blue-600 font-semibold dark:text-blue-400">
              {hero.action_button}
            </p>
            <button
              onClick={() => handleDelete(hero.id)}
              className="bg-red-600 text-white px-3 py-1 mt-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroAdmin;
