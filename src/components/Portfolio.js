import React, { useEffect, useState } from 'react';
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "./Portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "projects"),
      where("status", "==", "published"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setProjects(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(p => p.category?.toLowerCase() === activeFilter);

  const categories = ["all", "website", "video", "photo", "design"];

  return (
    <section id="portfolio" className="portfolio section">
      <h2>Our Recent Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="portfolio-grid grid">
        {filteredProjects.map(p => (
          <div
            key={p.id}
            className="portfolio-item"
            onClick={() => setSelectedProject(p)}
          >
            <img src={p.thumbnailUrl} alt={p.title} />

            <div className="overlay">
              <div className="overlay-content">
                <p className="cat">{p.category}</p>
                <h3>{p.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL */}
      {selectedProject && (
  <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>

      <img src={selectedProject.thumbnailUrl} alt={selectedProject.title} />

      <div className="modal-info">
        <h3>{selectedProject.title}</h3>
        <p className="cat">{selectedProject.category}</p>

        {selectedProject.description && (
          <p className="desc">{selectedProject.description}</p>
        )}

        {selectedProject.link && (
          <a
            className="visit-btn"
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        )}
      </div>
    </div>
  </div>
)}
    </section>
  );
}
