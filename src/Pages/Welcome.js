import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const search = new URLSearchParams(useLocation().search);
  const name = search.get('name') || 'Guest';
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic for logout if needed, for now, it redirects to login
    navigate('/');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome, <span>{name}</span>!</h1>
        <p>We're thrilled to have you here. Discover all the new opportunities we have waiting for you!</p>
        <button onClick={handleLogout} className="explore-btn">Log Out</button>
      </div>
    </div>
  );
};

export default Welcome;
