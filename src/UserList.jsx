// UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    // Fetch the list of usernames from your API
    const fetchUsernames = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/usernames');
        if (!response.ok) {
          throw new Error('Failed to fetch usernames');
        }

        const data = await response.json();
        setUsernames(data.usernames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsernames();
  }, []);

  return (
    <div>
      <h2>Usernames</h2>
      <ul>
        {usernames.map((username) => (
          <li key={username}>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
