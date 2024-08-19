import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleExploreMenuClick = () => {
    navigate('/menu');
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h1>Welcome to MULINE</h1>
          <p>Delicious food, cozy atmosphere</p>
          <button onClick={handleExploreMenuClick} className="hero-button">Explore Menu</button>
        </div>
      </div>
      <div className="highlights">
        <div className="container">
          <div className="highlight-item">
            <h2>Fresh Ingredients</h2>
            <p>We use only the freshest ingredients in our dishes.</p>
          </div>
          <div className="highlight-item">
            <h2>Cozy Atmosphere</h2>
            <p>Enjoy a cozy and welcoming atmosphere.</p>
          </div>
          <div className="highlight-item">
            <h2>Exceptional Service</h2>
            <p>Our staff is dedicated to providing the best service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
