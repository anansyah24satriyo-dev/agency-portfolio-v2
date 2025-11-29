// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">

<div className="footer-section">
  <img 
    src="./img/Logo Agensi.png" 
    alt="Agency Logo" 
    className="footer-logo"
  />
  <p>We create stunning visuals and digital experiences.</p>
</div>

    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Contact Info</h4>
      <p>Email: info@youragency.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Main St, City, Country</p>
    </div>

    <div className="footer-section">
      <h4>Follow Us</h4>
      <div className="flex gap-4 items-center">
        <a href="https://www.instagram.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" /></a>
        <a href="https://www.tiktok.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" /></a>
        <a href="https://www.linkedin.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" /></a>
        <a href="https://t.me/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" /></a>
      </div>
    </div>

  </div>

  <div className="copyright">
    <p>© 2025 Your Agency Name. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;