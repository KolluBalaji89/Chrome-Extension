// src/components/UserList.js
import React from 'react';

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div>
      <h2>User List</h2>
     
        {users.map((user) => (
          <li key={user._id}>
           Name: {user.name} - Email:{user.email} 
            <button onClick={() => onDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
   
    </div>
  );
};

export default UserList;
