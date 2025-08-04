import React, { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/navbars';

const NavbarAdmin = () => {
  const [navbars, setNavbars] = useState([]);
  const [form, setForm] = useState({
    phone: '',
    email: '',
    site_name: '',
    book_button_text: '',
  });

  const fetchNavbars = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setNavbars(data);
    } catch (error) {
      console.error('Error fetching navbars:', error);
    }
  };

  useEffect(() => {
    fetchNavbars();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to create navbar');

      const newNavbar = await res.json();
      setNavbars([newNavbar, ...navbars]);
      setForm({ phone: '', email: '', site_name: '', book_button_text: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this navbar?')) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete navbar');

      setNavbars(navbars.filter((n) => n.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Navbar Admin Panel</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded shadow"
      >
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          name="site_name"
          placeholder="Site Name"
          value={form.site_name}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          name="book_button_text"
          placeholder="Book Button Text"
          value={form.book_button_text}
          onChange={handleChange}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
        >
          Add Navbar
        </button>
      </form>

      <div className="space-y-4">
        {navbars.map((navbar) => (
          <div
            key={navbar.id}
            className="border p-4 rounded shadow flex justify-between items-center dark:border-gray-700 dark:bg-gray-800"
          >
            <div>
              <p><strong>Site:</strong> {navbar.site_name}</p>
              <p><strong>Phone:</strong> {navbar.phone}</p>
              <p><strong>Email:</strong> {navbar.email}</p>
              <p><strong>Button:</strong> {navbar.book_button_text}</p>
            </div>
            <button
              onClick={() => handleDelete(navbar.id)}
              className="bg-red-600 text-white p-2 rounded hover:bg-red-700 dark:hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarAdmin;
