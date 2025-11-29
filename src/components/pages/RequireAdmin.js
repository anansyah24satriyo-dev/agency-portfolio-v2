import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ADMIN_EMAIL = "anansyah24satriyo@gmail.com";

export default function RequireAdmin({ children }) {
  const { currentUser, loading } = useAuth();

  console.log("DEBUG CURRENT USER:", currentUser);

  if (loading) return <p>Loading...</p>;

  if (!currentUser) {
    console.log("DEBUG: NO USER");
    return <Navigate to="/admin/login" />;
  }

  if (currentUser.email !== ADMIN_EMAIL) {
    console.log("DEBUG: NOT ADMIN");
    return <Navigate to="/admin/login" />;
  }

  console.log("DEBUG: ADMIN VERIFIED");
  return children;
}
