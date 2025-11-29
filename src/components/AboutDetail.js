// components/AboutDetail.js
import React from "react";
import "./AboutDetail.css";

const AboutDetail = () => {
  return (
    <section id="AboutDetail" className="about-detail section">

      {/* ===== TITLE ===== */}
      <div className="about-detail-header fade-in">
        <span className="tagline">LEARN MORE</span>
        <h2>Discover Who We Are, How We Work, and Why Clients Trust Us.</h2>
      </div>

      {/* ===== SECTION 1 — OUR STORY ===== */}
      <div className="story-section fade-in">
        <div className="story-text">
          <h3>Our Story</h3>
          <p>
            We are a creative agency dedicated to turning ideas into powerful 
            visuals and meaningful digital experiences. What started as a 
            small freelance team has now grown into a full-service agency 
            trusted by clients from various industries.
          </p>
          <p>
            Our mission is simple — create impactful designs, deliver 
            exceptional results, and build long-term professional relationships 
            with honesty and innovation.
          </p>
        </div>

        <div className="story-image">
          <img src="./img/Team2.jpg" alt="Our Team" />
        </div>
      </div>

      {/* ===== SECTION 2 — WHY CHOOSE US ===== */}
      <div className="why-section fade-in">
        <h3>Why Choose Us</h3>

        <div className="why-grid">
          <div className="why-card">
            <span className="icon">🎯</span>
            <h4>Experienced Creative Team</h4>
            <p>
              Skilled designers, editors, and developers who bring ideas to life 
              with professional quality.
            </p>
          </div>

          <div className="why-card">
            <span className="icon">⚡</span>
            <h4>Fast Turnaround</h4>
            <p>
              We understand deadlines. Our team ensures fast delivery without 
              compromising quality.
            </p>
          </div>

          <div className="why-card">
            <span className="icon">📞</span>
            <h4>24/7 Communication</h4>
            <p>
              Always ready to assist through WhatsApp, Telegram, or email. 
              Your comfort is our priority.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 3 — OUR PROCESS ===== */}
      <div className="process-section fade-in">
        <h3>Our Creative Process</h3>

        <div className="process-steps">
          <div className="step">
            <span className="step-number">01</span>
            <h4>Consultation</h4>
            <p>We start by understanding your goals, ideas, and expectations.</p>
          </div>

          <div className="step">
            <span className="step-number">02</span>
            <h4>Planning</h4>
            <p>We create a clear plan, timeline, and concept direction.</p>
          </div>

          <div className="step">
            <span className="step-number">03</span>
            <h4>Design & Development</h4>
            <p>Our team begins crafting visuals, content, or digital products.</p>
          </div>

          <div className="step">
            <span className="step-number">04</span>
            <h4>Revision</h4>
            <p>We refine and adjust based on your feedback until perfect.</p>
          </div>

          <div className="step">
            <span className="step-number">05</span>
            <h4>Final Delivery</h4>
            <p>Your project is delivered in high quality, ready for use.</p>
          </div>

          <div className="step">
            <span className="step-number">06</span>
            <h4>Support</h4>
            <p>Ongoing assistance whenever you need it — even after the project ends.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutDetail;
