// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css'
import UserForm from './component/UserForm';
import UserList from './component/UserList';
import { getUsers, createUser, deleteUser } from './api';

const App = () => {
  const [users, setUsers] = useState([]);

 

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);


  const handleCreateUser = async (userData, { resetForm }) => {
    try {
      const newUser = await createUser(userData);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      resetForm();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

 
  const handleDeleteUser = async (userId) => {
    try {
      console.log('handleDeleteUser called. User ID:', userId);
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='form'>
      <h1>User Management App</h1>
      <UserForm onSubmit={handleCreateUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser}  />
    </div>
  );
};

export default App;
