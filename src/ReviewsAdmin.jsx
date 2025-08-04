import React, { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/review';

const ReviewsAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', review: '', picture: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch(() => {
        setReviews([
          {
            id: 1,
            name: 'Default User',
            review: 'This is a default review.',
            picture_url: 'https://via.placeholder.com/100',
          },
        ]);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAddReview = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', newReview.name);
    formData.append('review', newReview.review);
    if (newReview.picture) {
      formData.append('picture', newReview.picture);
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setReviews((prev) => [...prev, data]);
      setNewReview({ name: '', review: '', picture: null });
    } catch (error) {
      alert('Error adding review');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');

      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch (error) {
      alert('Error deleting review');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold">Manage Reviews</h2>

      <input
        type="text"
        name="name"
        value={newReview.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="review"
        value={newReview.review}
        onChange={handleChange}
        placeholder="Review"
        className="w-full p-2 border rounded"
      />
      <input type="file" name="picture" onChange={handleChange} className="w-full" />

      <button
        onClick={handleAddReview}
        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        )}
        {loading ? 'Adding...' : 'Add Review'}
      </button>

      <div className="space-y-2">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded shadow space-y-2">
            <img
              src={review.picture_url}
              alt={review.name}
              className="w-16 h-16 object-cover rounded-full"
            />
            <h3 className="font-bold">{review.name}</h3>
            <p>{review.review}</p>
            <button
              onClick={() => handleDelete(review.id)}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsAdmin;
