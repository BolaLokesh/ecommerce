import React, { useState } from 'react';
import axios from 'axios';

const UserAuth = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password

  const handleLogin = () => {
    axios.post('http://localhost:5000/api/auth/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token); // Store JWT token
        alert('Login Successful!');
      })
      .catch(err => console.error(err)); // Log errors
  };

  return (
    <div className="user-auth">
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserAuth;
