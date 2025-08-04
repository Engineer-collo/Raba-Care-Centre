import React, { useState, useEffect, useRef } from 'react';

const LogoAdmin = () => {
  const [file, setFile] = useState(null);
  const [logos, setLogos] = useState([]);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false); // ✅ New state
  const fileInputRef = useRef(null);

  const fetchLogos = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/logos');
      const data = await res.json();
      setLogos(data);
    } catch (err) {
      console.error('Error fetching logos:', err);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please choose a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('logo', file);
    setIsUploading(true); // ✅ Start spinner

    try {
      const res = await fetch('http://localhost:8000/api/logos', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Upload successful!");
        setLogos([data, ...logos]);
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setMessage(data.error || 'Upload failed');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setMessage('Upload failed');
    } finally {
      setIsUploading(false); // ✅ Stop spinner
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/logos/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setLogos(logos.filter((logo) => logo.id !== id));
        setMessage("Logo deleted successfully.");
      } else {
        const data = await res.json();
        setMessage(data.error || 'Failed to delete logo.');
      }
    } catch (err) {
      console.error('Delete error:', err);
      setMessage('Failed to delete logo.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Logo</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        disabled={isUploading}
        className={`flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isUploading && (
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
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>

      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}

      <h3 className="mt-6 font-semibold">Uploaded Logos</h3>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {logos.map((logo) => (
          <div key={logo.id} className="relative border rounded overflow-hidden">
            <img
              src={logo.logo_url}
              alt="logo"
              className="w-full h-auto"
            />
            <button
              onClick={() => handleDelete(logo.id)}
              className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 text-xs rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoAdmin;
