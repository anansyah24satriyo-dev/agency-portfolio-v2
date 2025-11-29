import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminSidebar from "../../admin/AdminSidebar";
import AdminHome from "../../admin/AdminHome";
import ProjectsList from "../../admin/ProjectsList";
import ProjectAdd from "../../admin/ProjectAdd";
import MessagesList from "../../admin/MessagesList";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <AdminSidebar />
      <main style={{ flex: 1, overflowY: "auto", padding: 24 }}>
        <Routes>
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="projects" element={<ProjectsList />} />
          <Route path="projects/add" element={<ProjectAdd />} />
          <Route path="messages" element={<MessagesList />} />
          <Route path="" element={<Navigate to="dashboard" replace />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
    </div>
  );
}