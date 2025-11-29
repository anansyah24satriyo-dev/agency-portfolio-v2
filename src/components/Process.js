// components/Process.js
import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    { icon: '💬', title: 'Discussion', desc: 'We analyze your needs and goals.' },
    { icon: '🎨', title: 'Creation', desc: 'We design and build the visual content.' },
    { icon: '🚚', title: 'Delivery', desc: 'Final results delivered fast and securely.' },
  ];

  return (
    <section id="process" className="process section fade-in">
      <h2 className="section-title">How We Work</h2>
      <p className="section-subtitle">
        Simple workflow for efficient and professional results
      </p>

      <div className="process-container">
        {steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
