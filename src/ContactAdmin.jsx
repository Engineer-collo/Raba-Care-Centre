import React, { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/contacts';

const ContactAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    intro_text1: '',
    intro_text2: '',
    phone: '',
    email: '',
    location: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [editingContact, setEditingContact] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setContacts(data);
  };

  const handleInputChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditingContact({ ...editingContact, [name]: value });
    } else {
      setNewContact({ ...newContact, [name]: value });
    }
  };

  const handleCreate = async () => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact)
    });
    if (res.ok) {
      setNewContact({ intro_text1: '', intro_text2: '', phone: '', email: '', location: '' });
      fetchContacts();
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  const handleUpdate = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingContact)
    });
    if (res.ok) {
      setEditingId(null);
      setEditingContact({});
      fetchContacts();
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      fetchContacts();
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Admin</h2>

      {/* Create Form */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Add Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['intro_text1', 'intro_text2', 'phone', 'email', 'location'].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.replace('_', ' ')}
              value={newContact[field]}
              onChange={handleInputChange}
              className="border p-2 rounded w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          ))}
        </div>
        <button
          onClick={handleCreate}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
        >
          Add Contact
        </button>
      </div>

      {/* Contact List */}
      <h3 className="text-xl font-semibold mt-8 mb-4">All Contacts</h3>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-4 rounded shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {editingId === contact.id ? (
              <>
                {['intro_text1', 'intro_text2', 'phone', 'email', 'location'].map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={editingContact[field]}
                    onChange={(e) => handleInputChange(e, true)}
                    className="border p-2 rounded w-full mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                ))}
                <button
                  onClick={() => handleUpdate(contact.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2 hover:bg-green-700 dark:hover:bg-green-500"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setEditingContact({});
                  }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p><strong>Intro 1:</strong> {contact.intro_text1}</p>
                <p><strong>Intro 2:</strong> {contact.intro_text2}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Location:</strong> {contact.location}</p>
                <div className="mt-2">
                  <button
                    onClick={() => {
                      setEditingId(contact.id);
                      setEditingContact(contact);
                    }}
                    className="text-blue-600 dark:text-blue-400 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
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

export default ContactAdmin;
