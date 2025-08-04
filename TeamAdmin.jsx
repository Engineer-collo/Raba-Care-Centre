import React, { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/team';

const TeamAdmin = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({ intro_text: '', picture: null, name: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editTeam, setEditTeam] = useState({ intro_text: '', picture: null, name: '', description: '' });

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTeams(data);
    } catch (err) {
      console.error('Failed to fetch teams', err);
    }
  };

  const handleAdd = async () => {
    if (!newTeam.name.trim() || !newTeam.description.trim()) return;

    const formData = new FormData();
    formData.append('intro_text', newTeam.intro_text);
    formData.append('name', newTeam.name);
    formData.append('description', newTeam.description);
    if (newTeam.picture) {
      formData.append('picture', newTeam.picture);
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const created = await res.json();
        setTeams([created, ...teams]);
        setNewTeam({ intro_text: '', picture: null, name: '', description: '' });
      }
    } catch (err) {
      console.error('Error creating team', err);
    }
  };

  const handleEdit = (team) => {
    setEditingId(team.id);
    setEditTeam({ intro_text: team.intro_text, name: team.name, description: team.description, picture: null });
  };

  const handleUpdate = async (id) => {
    const formData = new FormData();
    formData.append('intro_text', editTeam.intro_text);
    formData.append('name', editTeam.name);
    formData.append('description', editTeam.description);
    if (editTeam.picture) {
      formData.append('picture', editTeam.picture);
    }

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (res.ok) {
        const updated = await res.json();
        setTeams(teams.map(t => (t.id === id ? updated : t)));
        setEditingId(null);
        setEditTeam({ intro_text: '', name: '', description: '', picture: null });
      }
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setTeams(teams.filter(t => t.id !== id));
      }
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Team Admin</h2>

      <div className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Intro Text"
          value={newTeam.intro_text}
          onChange={(e) => setNewTeam({ ...newTeam, intro_text: e.target.value })}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Name"
          value={newTeam.name}
          onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          className="border px-3 py-2 rounded w-full"
        />
        <textarea
          placeholder="Description"
          value={newTeam.description}
          onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="file"
          onChange={(e) => setNewTeam({ ...newTeam, picture: e.target.files[0] })}
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Team Member
        </button>
      </div>

      <ul className="space-y-4">
        {teams.map(team => (
          <li key={team.id} className="flex flex-col gap-2 border p-4 rounded shadow-sm">
            {editingId === team.id ? (
              <>
                <input
                  type="text"
                  value={editTeam.intro_text}
                  onChange={(e) => setEditTeam({ ...editTeam, intro_text: e.target.value })}
                  className="border px-2 py-1 rounded"
                />
                <input
                  type="text"
                  value={editTeam.name}
                  onChange={(e) => setEditTeam({ ...editTeam, name: e.target.value })}
                  className="border px-2 py-1 rounded"
                />
                <textarea
                  value={editTeam.description}
                  onChange={(e) => setEditTeam({ ...editTeam, description: e.target.value })}
                  className="border px-2 py-1 rounded"
                />
                <input
                  type="file"
                  onChange={(e) => setEditTeam({ ...editTeam, picture: e.target.files[0] })}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleUpdate(team.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button onClick={() => setEditingId(null)} className="text-gray-600">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{team.name}</h3>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(team)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(team.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">{team.description}</p>
                {team.picture_url && (
                  <img src={team.picture_url} alt={team.name} className="w-24 h-24 object-cover rounded" />
                )}
                <p className="text-sm text-gray-500">{team.intro_text}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamAdmin;
