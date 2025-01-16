// src/api.js
const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your backend API URL

export const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  

export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (userId) => {
  // Validate the userId format
  const validObjectIdFormat = /^[0-9a-fA-F]{24}$/;
  if (!validObjectIdFormat.test(userId)) {
    throw new Error('Invalid userId format');
  }

  // If the format is valid, proceed with the DELETE request
  const response = await fetch(`http://localhost:3000/api/${userId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};

