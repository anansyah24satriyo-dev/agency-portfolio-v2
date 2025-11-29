import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import "./AdminHome.css";

export default function AdminHome() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    publishedProjects: 0,
    unreadMessages: 0,
  });

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    async function loadData() {
      const projectsSnap = await getDocs(collection(db, "projects"));
      const projects = projectsSnap.docs.map((d) => d.data());

      const messagesSnap = await getDocs(collection(db, "messages"));
      const messages = messagesSnap.docs.map((d) => d.data());

      setStats({
        totalProjects: projects.length,
        publishedProjects: projects.filter((p) => p.status === "published").length,
        unreadMessages: messages.filter((m) => !m.read).length,
      });

      const latestQuery = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc"),
        limit(5)
      );

      const latestSnap = await getDocs(latestQuery);
      setLatest(latestSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }

    loadData();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown";
    const date = timestamp.toDate();
    return date.toLocaleString("id-ID");
  };

  return (
    <div className="dashboard">
      <h2 className="title">Dashboard Overview</h2>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <div className="icon">📁</div>
          <div className="content">
            <h3>{stats.totalProjects}</h3>
            <span>Total Projects</span>
          </div>
        </div>

        <div className="stat">
          <div className="icon">🚀</div>
          <div className="content">
            <h3>{stats.publishedProjects}</h3>
            <span>Published</span>
          </div>
        </div>

        <div className="stat">
          <div className="icon">📩</div>
          <div className="content">
            <h3>{stats.unreadMessages}</h3>
            <span>Unread Messages</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="actions">
        <button onClick={() => (window.location.href = "/admin/projects/add")}>
          + Add Project
        </button>
        <button onClick={() => (window.location.href = "/admin/projects")}>
          View Projects
        </button>
        <button onClick={() => (window.location.href = "/admin/messages")}>
          Messages
        </button>
      </div>

      {/* Latest Projects */}
      <h3 className="subtitle">Latest Projects</h3>

      <div className="latest">
        {latest.length === 0 ? (
          <div className="empty-state">No recent projects.</div>
        ) : (
          latest.map((p) => (
            <div key={p.id} className="item">
              <img src={p.thumbnailUrl || "/no-image.png"} alt="thumb" />

              <div className="info">
                <strong>{p.title}</strong>
                <span>{p.category}</span>
                <small>{formatDate(p.createdAt)}</small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
