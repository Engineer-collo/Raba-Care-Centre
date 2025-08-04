import React, { useEffect, useState } from 'react';

const InquiryAdmin = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/inquiries')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch inquiries');
        }
        return response.json();
      })
      .then(data => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading inquiries...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">User Inquiries</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              <th className="py-3 px-4">No.</th>
              <th className="py-3 px-4">Name Of Sender</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Message Body</th>
              <th className="py-3 px-4">Date Send</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry, index) => (
              <tr key={inquiry.id} className="border-t dark:border-gray-600 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{inquiry.name}</td>
                <td className="py-2 px-4">{inquiry.email}</td>
                <td className="py-2 px-4">{inquiry.message}</td>
                <td className="py-2 px-4">{new Date(inquiry.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiryAdmin;
