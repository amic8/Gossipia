"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const MainComponent = () => {
  const [gossips, setGossips] = useState([]);
  const [newGossip, setNewGossip] = useState("");
  const [author, setAuthor] = useState("");
  const [secret, setSecret] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  // Generate ID after component mounts
  useEffect(() => {
    setId(uuidv4());
  }, []);

  // Fetch gossips from the backend
  useEffect(() => {
    const fetchGossips = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gossips");
        setGossips(response.data);
      } catch (error) {
        console.error("Error fetching gossips:", error);
      }
    };

    fetchGossips();
  }, []);

  // Handle creating a new gossip
  const handleCreateGossip = async () => {
    if (!newGossip || !secret || !author) return;
    try {
      const response = await axios.post("http://localhost:3000/gossips", {
        secret,
        id,
        content: newGossip,
        author,
        date: new Date().toISOString(),
      });
      setGossips([response.data, ...gossips]);
      setNewGossip("");
      setAuthor("");
      setSecret("");
      setShowModal(false);
      setId(uuidv4()); // Generate new ID for next gossip
    } catch (error) {
      console.error("Error creating gossip:", error);
    }
  };

  return (
    <div className="mt-16 p-6 max-w-4xl mx-auto bg-gray-100 shadow-xl rounded-lg">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-900">
        Gossip Feed
      </h1>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
            <h2 className="text-3xl font-semibold mb-6 text-lime-500">
              Add New Gossip
            </h2>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
              className="w-full p-4 mb-5 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
            />
            <input
              type="text"
              value={newGossip}
              onChange={(e) => setNewGossip(e.target.value)}
              placeholder="Gossip Content"
              className="w-full p-4 mb-5 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
            />
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter a secret to delete later"
              className="w-full p-4 mb-5 border border-gray-400 rounded-lg focus:outline-none focus:border-lime-500"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-5 py-3 rounded-lg hover:bg-gray-600 transition-all mr-3"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGossip}
                className="bg-lime-500 text-white px-5 py-3 rounded-lg hover:bg-lime-600 transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="gossips-list overflow-x-auto">
        <div className="bg-gray shadow-lg rounded-lg divide-y-2 divide-gray-200">
          {gossips.map((gossip, index) => (
            <div
              key={gossip.id}
              className={`p-6  ${
                index % 2 === 0 ? "bg-lime-200 " : "bg-gray-100"
              } flex justify-between items-center rounded-lg mb-4 `}
            >
              <div>
                <span className="text-xl font-semibold text-gray-700">
                  {gossip.author}
                </span>
                <p className="text-lg mt-2 text-gray-600">{gossip.content}</p>
              </div>
              <div className="text-2xl text-gray-800 font-bold cursor-pointer">
                <button
                  onClick={async () => {
                    const enteredSecret = prompt(
                      "Enter the secret to delete this gossip:"
                    );
                    if (enteredSecret) {
                      try {
                        await axios.delete(
                          `http://localhost:3000/gossips/${gossip.id}`,
                          { data: { secret: enteredSecret } }
                        );
                        setGossips(gossips.filter((g) => g.id !== gossip.id));
                      } catch (error) {
                        alert("Failed to delete gossip: Incorrect secret");
                      }
                    }
                  }}
                  className=" text-white px-3 py-1 rounded-md "
                >
                 <img src="/deleteimg.png" className="w-8" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-lime-400 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-lime-500 transition-all"
          >
            <span className="text-4xl font-bold">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
