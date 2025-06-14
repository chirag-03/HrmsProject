import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "../../styles/Login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { username, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("expires", Date.now() + 2 * 60 * 60 * 1000);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  useEffect(() => {
    const expires = localStorage.getItem("expires");
    if (expires && Date.now() > parseInt(expires)) {
      localStorage.clear();
    }
  }, []);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
