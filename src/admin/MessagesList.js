import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function MessagesList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate();
    return date.toLocaleString("id-ID");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await deleteDoc(doc(db, "messages", id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: 20 }}>📩 Incoming Messages</h2>

      <div
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              padding: 18,
              borderRadius: 12,
              background: "#ffffff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              display: "grid",
              gridTemplateColumns: "50px 1fr auto",
              alignItems: "center",
              gap: 16,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 48,
                height: 48,
                background: "#4F46E5",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {m.name?.charAt(0).toUpperCase()}
            </div>

            {/* Message Info */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong style={{ fontSize: 16 }}>{m.name}</strong>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{m.email}</span>
              <span style={{ marginTop: 6 }}>{m.message}</span>
              <small style={{ marginTop: 4, color: "#666" }}>
                {formatDate(m.createdAt)}
              </small>
            </div>

            {/* Actions */}
            <button
              onClick={() => handleDelete(m.id)}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {messages.length === 0 && (
        <p style={{ marginTop: 30, opacity: 0.6, textAlign: "center" }}>
          No messages yet
        </p>
      )}
    </div>
  );
}
