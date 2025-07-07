import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5001/api/auth/register',
        { email, password }
      );
      console.log('registration successful:', response.data);
      alert('registration successful Please log in.');
      navigate('/login'); 
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      alert(`Registration failed: ${error.response?.data?.msg || 'an error occurred'}`);
    }
  };
  return (
    <div>
      <h2>Register for an Account</h2>
      <form onSubmit={handleSubmit}>
        {}
        <div>
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="6" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>already have an account? <Link to="/login">login here</Link></p>
    </div>
  );
}
export default RegisterPage;