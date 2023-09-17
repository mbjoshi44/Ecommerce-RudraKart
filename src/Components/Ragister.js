// Ragister.js
import React, { useState } from 'react';
import './rag.css'
import { useNavigate } from 'react-router-dom';
const Ragister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    

    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform form validation and registration logic.
    // You may also make an API request to a backend for registration.
    if(formData.password !== formData.confirmPassword ){
      alert("password MisMatch")
      return
    }else{
    localStorage.setItem('user', JSON.stringify(formData));
    // For this example, we'll simply log the form data.\
    alert("Registration SuccesFul");
    navigate("/login")
    console.log(formData);
    }
  };

  return (
    <div className='registration-form-container'>
      <h2>Registration </h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='rag-button btn btn-outline-dark' >Register</button>
      </form>
    </div>
  );
};

export default Ragister;
