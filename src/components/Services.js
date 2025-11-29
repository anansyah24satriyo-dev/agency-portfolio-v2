// components/Services.js
import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

const services = [
  {
    icon: '🎬',
    title: 'Video Editing',
    desc: 'Cinematic, short form, reels',
    detail: {
      intro: 'Layanan video editing profesional untuk kebutuhan brand, bisnis, maupun personal. Menggabungkan storytelling, pacing, color grading, dan sound design untuk hasil yang cinematic & engaging.',
      benefits: [
        'Cutting & pacing yang rapi dan dinamis',
        'Color grading profesional',
        'Motion graphics ringan',
        'Format khusus IG Reels, TikTok, YouTube, Ads',
        'Penyesuaian audio & music syncing'
      ],
      tech: [
        'Adobe Premiere Pro',
        'DaVinci Resolve',
        'After Effects (opsional)'
      ],
      eta: '1–3 hari (short form), 3–7 hari (video cinematic panjang)',
      suitable: [
        'Content creator',
        'UMKM',
        'Iklan produk',
        'Event recap'
      ]
    }
  },

  {
    icon: '📸',
    title: 'Photography',
    desc: 'Product, event, portrait',
    detail: {
      intro: 'Layanan fotografi profesional untuk kebutuhan visual brand dan personal.',
      benefits: [
        'Foto high-resolution',
        'Editing & retouching dasar',
        'Warna konsisten sesuai brand identity',
        'File digital siap upload'
      ],
      tech: [
        'DSLR / Mirrorless',
        'Lightroom',
        'Photoshop'
      ],
      eta: 'Sesi pemotretan: 1 hari, Editing: 1–3 hari',
      suitable: [
        'Produk UMKM',
        'Dokumentasi event',
        'Personal portrait',
        'Food & beverage'
      ]
    }
  },

  {
    icon: '💻',
    title: 'UI/UX Design',
    desc: 'Website & mobile app',
    detail: {
      intro: 'Desain UI/UX modern dan profesional untuk web atau mobile app menggunakan Figma.',
      benefits: [
        'User flow',
        'Wireframe',
        'High-fidelity UI design',
        'Prototype interaktif',
        'Design system / style guide'
      ],
      tech: [
        'Figma',
        'Illustrator (opsional)'
      ],
      eta: '3–7 hari per halaman (tergantung kompleksitas)',
      suitable: [
        'Website startup',
        'Aplikasi mobile',
        'LMS / sistem internal',
        'Desain branding digital'
      ]
    }
  },

  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Responsive modern websites',
    detail: {
      intro: 'Pembuatan website modern yang cepat, responsive, dan SEO-friendly.',
      benefits: [
        'Desain modern & konsisten',
        'Website responsive di semua device',
        'Animasi ringan & interaktif',
        'Integrasi fitur sederhana',
        'Tutorial pemakaian dasar untuk client'
      ],
      tech: [
        'React / Next.js',
        'TailwindCSS',
        'Firebase / Node.js (opsional)'
      ],
      eta: '5–14 hari (landing page / company profile)',
      suitable: [
        'Portfolio',
        'UMKM',
        'Company profile',
        'Event website'
      ]
    }
  }
];

  return (
    <section id="services" className="services section fade-in">
      <h2 className="section-title">Our Creative Services</h2>
      <p className="section-subtitle">
        Build your brand stronger with professional visuals & digital experiences
      </p>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button
              className="btn small"
              onClick={() => setSelectedService(service)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
{selectedService && (
  <div className="modal-overlay" onClick={() => setSelectedService(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>{selectedService.title}</h2>

      {/* Intro */}
      <p className="modal-intro">{selectedService.detail.intro}</p>

      {/* Benefits */}
      <h3 className="modal-subtitle">Apa yang Anda Dapat:</h3>
      <ul className="modal-list">
        {selectedService.detail.benefits.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Tech */}
      <h3 className="modal-subtitle">Teknologi:</h3>
      <ul className="modal-list">
        {selectedService.detail.tech.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* ETA */}
      <h3 className="modal-subtitle">Estimasi Pengerjaan:</h3>
      <p>{selectedService.detail.eta}</p>

      {/* Suitable */}
      <h3 className="modal-subtitle">Cocok Untuk:</h3>
      <ul className="modal-list">
        {selectedService.detail.suitable.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button className="btn close" onClick={() => setSelectedService(null)}>
        Close
      </button>
    </div>
  </div>
)}

    </section>
  );
};

export default Services;
