import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/candidates">Candidates</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/leaves">Leaves</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
