import React, { useState, useContext } from 'react';
import './AuthForm.css';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function AuthForm({ endpoint, buttonText, onSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (endpoint === 'signup' && formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/${endpoint}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessage(response.data.message);

      if (response.status === 200 || response.status === 201) {
        login();
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setMessage(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className="FormWrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {endpoint === 'signup' && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{buttonText}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AuthForm;
