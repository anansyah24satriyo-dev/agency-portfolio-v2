// components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO • TechCorp',
      message:
        '"They delivered exactly what we needed, on time. Excellent communication and creativity!"',
      img: './img/P1.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Brand Designer',
      message:
        '"Great experience working with this team. High-quality results and very professional!"',
      img: './img/P2.jpg',
    },
  ];

  return (
    <section id="testimonials" className="testimonials section fade-in">
      <h2 className="section-title">What Clients Say</h2>
      <p className="section-subtitle">
        Trusted by brands, loved by clients
      </p>

      <div className="testimonials-slider">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="profile">
              <img src={t.img} alt={t.name} />
            </div>
            <p className="message">{t.message}</p>
            <div className="stars">★★★★★</div>
            <h4 className="name">{t.name}</h4>
            <span className="role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
