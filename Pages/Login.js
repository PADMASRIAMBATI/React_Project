import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    if (email && password) {
      navigate(`/welcome?name=${email.split('@')[0]}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to Your Account</h1>
        <p>Login using social networks</p>
        <div className="social-buttons">
          <button className="social-btn fb-btn">Facebook</button>
          <button className="social-btn google-btn">Google+</button>
          <button className="social-btn linkedin-btn">LinkedIn</button>
        </div>
        <p>OR</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
      <div className="signup-section">
        <h2>New Here?</h2>
        <p>Sign up and discover a great amount of new opportunities!</p>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
