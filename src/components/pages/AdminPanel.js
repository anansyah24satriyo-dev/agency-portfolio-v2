import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';  // Pastikan path firebase.js benar
import { useAuth } from '../contexts/AuthContext';  // Import dari AuthContext
import AdminHome from '../../admin/AdminHome';  // Jika AdminHome di subfolder
import ProjectsList from '../../admin/ProjectsList';
import MessagesList from '../../admin/MessagesList';
import { Routes, Route } from 'react-router-dom';

import '../pages/AdminPanel.css'; // Jika ada styling khusus

const AdminPanel = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('home');  // Untuk navigation internal

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => signOut(auth);

  if (!currentUser) {
    // Tampilkan Login Form
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h2>Admin Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  // Jika sudah login, tampilkan Dashboard
  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleLogout}>Logout</button>
      <nav>
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('projects')}>Projects</button>
        <button onClick={() => setActiveTab('messages')}>Messages</button>
      </nav>
      {activeTab === 'home' && <AdminHome />}
      {activeTab === 'projects' && <ProjectsList />}
      {activeTab === 'messages' && <MessagesList />}
      {/* Atau pakai Routes jika mau sub-routing */}
    </div>
  );
};

export default AdminPanel;