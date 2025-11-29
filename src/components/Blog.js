// components/Blog.js
import React, { useState } from "react";
import "./Blog.css";

const ARTICLES = [
  {
    id: "a1",
    title: "5 Alasan Kenapa Bisnis Anda Butuh Website Profesional di 2025",
    date: "2025-03-10",
    author: "Boejank VisionLab",
    img: "./img/Hero.jpg",
    excerpt:
      "Website bukan sekadar tampilan. Di 2025, website adalah fondasi kredibilitas, SEO, dan konversi.",
    content: `
      <p><strong>Di era digital sekarang</strong>, calon pelanggan lebih dulu mencari informasi...</p>
      <h4>1. Meningkatkan Kredibilitas</h4>
      <p>Website resmi membuat bisnis Anda terlihat terpercaya...</p>
      <h4>2. Kontrol Brand & Konten</h4>
      <p>Website adalah aset yang Anda miliki sepenuhnya...</p>
      <h4>3. SEO & Visibilitas Jangka Panjang</h4>
      <p>Pelanggan menemukan layanan Anda tanpa biaya iklan...</p>
      <h4>4. Integrasi Fitur Bisnis</h4>
      <p>Booking, pembayaran, analitik, semuanya dalam satu tempat.</p>
      <h4>5. Investasi Jangka Panjang</h4>
      <p>Website adalah aset digital yang terus bertumbuh nilainya.</p>
    `,
  },
];

export default function Blog() {
  const [openArticle, setOpenArticle] = useState(null);

  return (
    <section id="blog" className="blog section">
      <div className="blog-header">
        <h2>Insights & Articles</h2>
        <p className="subtitle">
          Handcrafted knowledge & practical digital strategies from our studio.
        </p>
      </div>

      <div className="blog-grid">
        {ARTICLES.map((a) => (
          <article key={a.id} className="blog-card">
            <div className="thumb-wrap">
              <img src={a.img} alt={a.title} loading="lazy" />
            </div>

            <div className="blog-meta">
              <span className="date">
                {new Date(a.date).toLocaleDateString("id-ID")}
              </span>
              <span className="dot">•</span>
              <span className="author">{a.author}</span>
            </div>

            <h3 className="blog-title">{a.title}</h3>
            <p className="excerpt">{a.excerpt}</p>

            <div className="card-actions">
              <button className="btn read" onClick={() => setOpenArticle(a)}>
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {openArticle && (
        <div className="blog-modal-overlay" onClick={() => setOpenArticle(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" aria-label="Close" onClick={() => setOpenArticle(null)}>
              ✕
            </button>

            <div className="modal-thumb">
              <img src={openArticle.img} alt={openArticle.title} />
            </div>

            <div className="modal-body">
              <div className="modal-meta">
                <span>{new Date(openArticle.date).toLocaleDateString("id-ID")}</span>
                <span>•</span>
                <span>{openArticle.author}</span>
              </div>

              <h2>{openArticle.title}</h2>

              <div
                className="modal-content"
                dangerouslySetInnerHTML={{ __html: openArticle.content }}
              />

              <div className="modal-actions">
                <a className="btn" href="#contact">Request a Website</a>
                <button className="btn outline" onClick={() => setOpenArticle(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
