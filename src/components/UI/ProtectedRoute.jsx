// === /client/src/components/UI/ProtectedRoute.jsx ===
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const expires = localStorage.getItem("expires");

  if (!token || Date.now() > parseInt(expires)) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
