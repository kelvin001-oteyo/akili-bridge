import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // ✅ Any logged-in user can access
  return children;
}
