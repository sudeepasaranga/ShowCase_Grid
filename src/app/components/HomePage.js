"use client";

import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error loading users: {error}</div>;

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="flex flex-col justify-center items-center px-20 py-32 w-full bg-red-50 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-2 gap-1 p-3 mx-auto">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="bg-white shadow-md rounded-lg p-4 flex flex-col-3 items-center text-center"
              >
                <img 
                  src={user.avatar_url} 
                  className="w-24 h-24 mb-4"
                />
                <h3 className="text-lg font-semibold">{user.login}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserList;

