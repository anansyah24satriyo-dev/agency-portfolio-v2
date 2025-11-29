import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Jika pakai React Router
import AdminHome from './AdminHome'; // Sekarang sudah ada
import ProjectsList from './ProjectsList'; // Sekarang sudah ada
import MessagesList from './MessagesList'; // Sudah ada, tapi diperbaiki
// Tambahkan import lain jika perlu, e.g., UploadProject

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/projects" element={<ProjectsList />} />
      <Route path="/messages" element={<MessagesList />} />
      {/* Tambahkan route lain */}
    </Routes>
  );
};

export default AdminRoutes;