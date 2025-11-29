import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">

      <div className="brand">Boejanks Admin</div>

      <nav>
        <NavLink to="/admin" end>
          Overview
        </NavLink>

        <NavLink to="/admin/projects">
          Projects List
        </NavLink>

        <NavLink to="/admin/projects/add">
          Add Project
        </NavLink>

        <NavLink to="/admin/messages">
          Messages
        </NavLink>

        <a href="/" target="_blank" rel="noreferrer">
          View Site
        </a>
      </nav>
    </div>
  );
}
