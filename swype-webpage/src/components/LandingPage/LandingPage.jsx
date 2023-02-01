import React from 'react';
import './LandingPage.css';
import logo from '../../assets/logo.PNG'

function LandingPage() {
  return (
    <div className="landing-page">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Welcome to Our Landing Page</h1>
      <p className="description">Learn more about our products and services.</p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
}

export default LandingPage;