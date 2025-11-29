// components/pages/AdminDashboard.js
import React from "react";
import { getAuth, signOut } from "firebase/auth";

export default function AdminDashboard() {
  const auth = getAuth();

  return (
    <div style={{ padding: "80px 20px" }}>
      <h2 style={{ color: "#0A4D98" }}>Admin Dashboard</h2>

      <button
        onClick={() => signOut(auth)}
        style={{
          background: "red",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: 8,
          marginTop: 20
        }}
      >
        Logout
      </button>

      <div
        style={{
          marginTop: 40,
          padding: 20,
          background: "#f9f9f9",
          borderRadius: 12,
          maxWidth: 600
        }}
      >
        <h3 style={{ marginBottom: 15 }}>Upload Project</h3>

        <input type="text" placeholder="Project Title" className="input" style={{
          width: "100%",
          padding: 12,
          marginBottom: 15,
          borderRadius: 8,
          border: "1px solid #ddd"
        }} />

        <input type="file" style={{ marginBottom: 15 }} />

        <button
          style={{
            background: "#0A4D98",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 8
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
