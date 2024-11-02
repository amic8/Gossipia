"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const mainComponent = () => {
  const [gossips, setGossips] = useState([]);
  const [newGossip, setNewGossip] = useState('');

  // Fetch gossips from the backend
  useEffect(() => {
    const fetchGossips = async () => {
      try {
        const response = await axios.get('http://localhost:3000/gossips');
        setGossips(response.data);
      } catch (error) {
        console.error('Error fetching gossips:', error);
      }
    };

    fetchGossips();
  }, []);

  // Handle creating a new gossip
  const handleCreateGossip = async () => {
    const id = uuidv4();
    if (!newGossip) return;
    try {
      const response = await axios.post('http://localhost:3000/gossips', {
        id:id,
        content: newGossip,
        author: 'Anonymous',
      });
      setGossips([response.data, ...gossips]);
      setNewGossip('');
    } catch (error) {
      console.error('Error creating gossip:', error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Gossipia</h1>
      <div className="new-gossip mb-6 flex justify-center">
        <input
          type="text"
          value={newGossip}
          onChange={(e) => setNewGossip(e.target.value)}
          placeholder="Share some gossip..."
          className="w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleCreateGossip}
          className="ml-4 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition-all"
        >
          Add New Gossip
        </button>
      </div>
      <div className="gossips-list overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-200 text-left">
              <th className="py-3 px-4 font-semibold text-gray-600">Author</th>
              <th className="py-3 px-4 font-semibold text-gray-600">Gossip</th>
              <th className="py-3 px-4 font-semibold text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {gossips.map((gossip) => (
              <tr key={gossip.id} className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">{gossip.author}</td>
                <td className="py-3 px-4 text-gray-700">{gossip.content}</td>
                <td className="py-3 px-4 text-gray-700">{new Date(gossip.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default mainComponent;