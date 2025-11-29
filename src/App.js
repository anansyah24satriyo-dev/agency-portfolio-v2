import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from "./components/Blog";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutPage from "./components/pages/AboutPage";
import Stats from "./components/Stats";

import AboutDetail from "./components/AboutDetail";

// Admin
import AdminLogin from "./components/pages/AdminLogin";
import RequireAdmin from "./components/pages/RequireAdmin";
import AdminLayout from "./components/pages/AdminLayout";

import { Outlet } from "react-router-dom";

import "./App.css";

/* PUBLIC LAYOUT (Navbar + Footer) */
function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          {/* PUBLIC ROUTES memakai PublicLayout */}
          <Route path="/" element={<PublicLayout />}>
            
            {/* HOME */}
            <Route
              index
              element={
                <>
                  <Hero />
                  <Stats />
                  <About />
                  <Services />
                  <Portfolio />
                  <Process />
                  <Testimonials />
                  <Blogs />
                  <Contact />
                </>
              }
            />

            {/* About pages */}
            <Route path="about" element={<AboutPage />} />
            <Route path="about/detail" element={<AboutDetail />} />

          </Route>

          {/* Admin Login (TANPA navbar/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ADMIN AREA (TANPA navbar/footer) */}
          <Route
            path="/admin/*"
            element={
              <RequireAdmin>
                <AdminLayout />
              </RequireAdmin>
            }
          >
            <Route index element={<div>Admin Home</div>} />
            <Route path="projects" element={<div>Project List</div>} />
            <Route path="projects/add" element={<div>Project Add</div>} />
            <Route path="messages" element={<div>Messages List</div>} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<div>Page Not Found</div>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
