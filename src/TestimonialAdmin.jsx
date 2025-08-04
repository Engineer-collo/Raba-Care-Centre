import React, { useState, useEffect, useRef } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/review';

const defaultReviews = [
  {
    id: 1,
    name: 'John Doe',
    picture_url: 'https://via.placeholder.com/100',
    review: 'This is a default review.',
    created_at: new Date().toISOString(),
  },
];

const TestimonialAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    picture_url: '',
    review: '',
  });
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const fetchReviews = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Fetch failed');
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error('Using default reviews due to error:', err);
      setReviews(defaultReviews);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });

      if (!res.ok) throw new Error('Failed to submit');
      await fetchReviews();
      setNewReview({ name: '', picture_url: '', review: '' });
      setEditingId(null);
    } catch (err) {
      console.error(err);
      alert('Error submitting review.');
    }
  };

  const handleEdit = (review) => {
    setNewReview({
      name: review.name,
      picture_url: review.picture_url,
      review: review.review,
    });
    setEditingId(review.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
      >
        Toggle Dark Mode
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {editingId ? 'Edit Review' : 'Add New Review'}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newReview.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
        />
        <input
          type="url"
          name="picture_url"
          placeholder="Picture URL"
          value={newReview.picture_url}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="review"
          placeholder="Review"
          value={newReview.review}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? 'Update Review' : 'Post Review'}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">All Reviews</h3>
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-3 flex items-start gap-4"
          >
            <img
              src={rev.picture_url}
              alt={rev.name}
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <p className="font-bold">{rev.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(rev.created_at).toLocaleDateString()}
              </p>
              <p className="mt-1">{rev.review}</p>
              <button
                onClick={() => handleEdit(rev)}
                className="text-blue-500 mt-2 hover:underline text-sm"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialAdmin;
