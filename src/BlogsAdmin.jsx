import React, { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/blogs';

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ name: '', blog_text: '', picture: null });
  const [editingId, setEditingId] = useState(null);
  const [editingBlog, setEditingBlog] = useState({});
  const [creating, setCreating] = useState(false); // ⬅️ New spinner state

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setBlogs(data);
  };

  const handleNewBlogChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setNewBlog({ ...newBlog, picture: files[0] });
    } else {
      setNewBlog({ ...newBlog, [name]: value });
    }
  };

  const handleCreate = async () => {
    setCreating(true); // ⬅️ Start spinner
    const formData = new FormData();
    formData.append('name', newBlog.name);
    formData.append('blog_text', newBlog.blog_text);
    if (newBlog.picture) formData.append('picture', newBlog.picture);

    const res = await fetch(API_URL, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setNewBlog({ name: '', blog_text: '', picture: null });
      fetchBlogs();
    } else {
      const err = await res.json();
      alert(err.error);
    }
    setCreating(false); // ⬅️ Stop spinner
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingBlog({ ...editingBlog, [name]: value });
  };

  const handleUpdate = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingBlog),
    });

    if (res.ok) {
      setEditingId(null);
      setEditingBlog({});
      fetchBlogs();
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (res.ok) fetchBlogs();
    else alert("Failed to delete blog");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Blog Admin</h2>

      {/* Create Blog */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Create Blog</h3>
        <input
          type="text"
          name="name"
          placeholder="Blog Title"
          value={newBlog.name}
          onChange={handleNewBlogChange}
          className="border p-2 w-full rounded mb-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <textarea
          name="blog_text"
          placeholder="Blog Text"
          value={newBlog.blog_text}
          onChange={handleNewBlogChange}
          className="border p-2 w-full rounded mb-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        ></textarea>
        <input
          type="file"
          name="picture"
          onChange={handleNewBlogChange}
          className="mb-2"
        />
        <button
          onClick={handleCreate}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500 disabled:opacity-60"
          disabled={creating}
        >
          {creating && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
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
          {creating ? 'Creating...' : 'Create Blog'}
        </button>
      </div>

      {/* List Blogs */}
      <h3 className="text-xl font-semibold mb-4">All Blogs</h3>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="border rounded p-4 shadow dark:border-gray-700 dark:bg-gray-800"
          >
            {editingId === blog.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editingBlog.name}
                  onChange={handleEditChange}
                  className="border p-2 w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <textarea
                  name="blog_text"
                  value={editingBlog.blog_text}
                  onChange={handleEditChange}
                  className="border p-2 w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
                <button
                  onClick={() => handleUpdate(blog.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2 hover:bg-green-700 dark:hover:bg-green-500"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setEditingBlog({});
                  }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <img
                  src={blog.picture_url}
                  alt={blog.name}
                  className="w-48 h-auto object-cover rounded mb-2"
                />
                <h4 className="text-lg font-semibold">{blog.name}</h4>
                <p>{blog.blog_text}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Created: {new Date(blog.created_at).toLocaleString()}
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => {
                      setEditingId(blog.id);
                      setEditingBlog(blog);
                    }}
                    className="text-blue-600 dark:text-blue-400 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 dark:text-red-400"
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

export default BlogAdmin;
