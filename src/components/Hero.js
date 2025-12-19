// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
<section class="hero" id="home">
  <div class="hero-container">
    <div class="hero-text">
      <span class="hero-badge">Creative Digital Agency</span>

      <h1>
        Build Your Brand With
        <br />
        <span>Powerful Digital Experiences</span>
      </h1>

      <p>
        We help businesses grow through website development,
        photography, video editing, and creative design that converts.
      </p>

      <div class="hero-buttons">
        <a href="#portfolio" class="btn primary">See Our Work</a>
        <a href="#contact" class="btn outline">Get Started</a>
      </div>
    </div>

    <div class="hero-image">
      <img src="./img/Hero.jpg" alt="Creative Agency" />
    </div>
  </div>
</section>
  );
};

export default Hero;