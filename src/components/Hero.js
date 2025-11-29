// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Creative Digital Agency You Can Trust</h1>
          <p>We deliver high-quality visual, design, and digital solutions for your brand.</p>
          <div className="hero-buttons">
            <button className="btn">See Our Work</button>
            <button className="btn outline">Get Started</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="./img/Hero.jpg" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;