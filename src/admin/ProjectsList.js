// src/admin/ProjectList.js

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import "./ProjectsList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const [editData, setEditData] = useState({
    title: "",
    category: "",
    status: "",
  });

  // Fetch all projects
  useEffect(() => {
    const fetchProjects = async () => {
      const snap = await getDocs(collection(db, "projects"));
      const list = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProjects(list);
    };
    fetchProjects();
  }, []);

  // Open Modal + fill state
  const openEditModal = (project) => {
    setCurrentProject(project);
    setEditData({
      title: project.title,
      category: project.category,
      status: project.status,
    });
    setModalOpen(true);
  };

  // Save Edit
  const handleUpdate = async () => {
    if (!currentProject) return;

    await updateDoc(doc(db, "projects", currentProject.id), editData);

    setProjects(
      projects.map((p) =>
        p.id === currentProject.id ? { ...p, ...editData } : p
      )
    );

    setModalOpen(false);
  };

  // Delete project
  const handleDelete = async (id) => {
    const ok = window.confirm("Yakin hapus project ini?");
    if (!ok) return;

    await deleteDoc(doc(db, "projects", id));
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="project-list">
      <h2>All Projects</h2>

      {projects.length === 0 && <p style={{ color: "#777" }}>Belum ada project</p>}

      {projects.map((p) => (
        <div className="project-card" key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.category}</p>
          <p>
            <strong>Status:</strong> {p.status}
          </p>

          <div className="actions">
            <button className="edit-btn" onClick={() => openEditModal(p)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(p.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Project</h3>

            <label>Title</label>
            <input
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
            />

            <label>Category</label>
            <select
              value={editData.category}
              onChange={(e) =>
                setEditData({ ...editData, category: e.target.value })
              }
            >
              <option value="Website">Website</option>
              <option value="Video">Video</option>
              <option value="Photo">Photo</option>
              <option value="Design">Design</option>
            </select>


            <label>Status</label>
            <select
              value={editData.status}
              onChange={(e) =>
                setEditData({ ...editData, status: e.target.value })
              }
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>

            <div className="modal-actions">
              <button className="save-btn" onClick={handleUpdate}>
                Save
              </button>
              <button className="cancel-btn" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectList;
