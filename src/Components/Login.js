
import React, { useState } from 'react';
import './rag.css';
import {useDispatch} from 'react-redux'
import { loginDetails } from '../redux/action/loginAction';

const Login = () => {
 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  let logValue= false;
const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the registered user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && formData.username === storedUser.username && formData.password === storedUser.password) { 
       logValue=true;
      dispatch(loginDetails(logValue))
       alert('Login successful!');

      

    } else {
      alert('Login failed. Please check your credentials.');
    }

    // Clear the password field
    setFormData({ ...formData, password: '' });
  };

  return (
    <div className='registration-form-container'>
      <h2>Login </h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
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
        <div className="form-group">
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
        <button type="submit" className='rag-button  btn btn-outline-dark'>Login</button>
      </form>
    </div>
  );
};

export default Login;
  