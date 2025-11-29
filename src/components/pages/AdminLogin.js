import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";   // <--- WAJIB

export default function AdminLogin() {
  const auth = getAuth();
  const navigate = useNavigate();                // <--- WAJIB

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("LOGIN SUCCESS:", result.user.email);

      navigate("/admin/dashboard");              // <--- REDIRECT
    } catch (err) {
      console.error("LOGIN ERROR:", err.code, err.message);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "100px 20px", maxWidth: 400, margin: "0 auto" }}>
      <h2 style={{ color: "#0A4D98", marginBottom: 20 }}>Admin Login</h2>

      <form onSubmit={handleLogin}>
        {/* Email */}
        <div style={{ marginBottom: 15 }}>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd"
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 15 }}>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd"
            }}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          style={{
            background: "#0A4D98",
            color: "#fff",
            padding: "12px 20px",
            width: "100%",
            borderRadius: 8
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
