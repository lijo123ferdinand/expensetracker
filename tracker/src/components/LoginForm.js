import React, { useState } from 'react';
import axios from 'axios';
import './../styles/Login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8086/api/login', {
            email,
            password
          });
          
        // const token = response.data.token;
        console.log('Login successful. ');

        setEmail('');
        setPassword('');
        // setError(null);

    } catch(error) {
        // setError('Invalid email or password');
        // console.error('Login error:', error);
        console.log('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
}

export default LoginForm;
