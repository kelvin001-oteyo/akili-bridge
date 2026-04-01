// src/routes/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { getCurrentUser, isAuthenticated } from "../utils/api";

export default function AdminRoute({ children }) {
  // Get auth status
  const isAuth = isAuthenticated();
  const user = getCurrentUser();
  
  // Check if user is authenticated
  if (!isAuth) {
    console.log("AdminRoute: User not authenticated, redirecting to auth");
    return <Navigate to="/auth" replace />;
  }
  
  // Check if user has admin privileges
  if (!user?.is_admin) {
    console.log("AdminRoute: User is not admin, redirecting to dashboard");
    return <Navigate to="/dashboard" replace />;
  }
  
  // User is admin, render children (AdminLayout)
  console.log("AdminRoute: Admin access granted");
  return children;
}