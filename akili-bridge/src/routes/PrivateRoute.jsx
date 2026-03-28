// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // Adjust this depending on how you store authentication
  const token = localStorage.getItem("token");

  if (!token) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the protected page
  return children;
}
