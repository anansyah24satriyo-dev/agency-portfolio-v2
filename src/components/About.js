// components/About.js
import React from 'react';
import './About.css';
import './AboutDetail';
import { useNavigate } from "react-router-dom";   // ⬅ WAJIB

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="about section fade-in">
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image">
          <img src="./img/Team.jpg" alt="Team" loading="lazy" />
        </div>

        {/* TEXT */}
        <div className="about-text">
          <span className="tagline">WHO WE ARE</span>
          <h2>We turn ideas into impactful visuals and digital experiences.</h2>

          <ul className="about-list">
            <li>🎯 Experienced Creative Team</li>
            <li>⚡ Fast Turnaround Guaranteed</li>
            <li>📞 24/7 Support & Communication</li>
          </ul>

          <button 
            className="btn about-btn"
            onClick={() => navigate("/about/detail")} // ⬅ WAJIB
          >
            Learn More
          </button>

        </div>
      </div>
    </section>
  );
};

export default About;