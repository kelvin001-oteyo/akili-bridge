import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const access = localStorage.getItem("access");

  if (!token && !access) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
