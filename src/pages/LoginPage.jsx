// === /client/src/pages/LoginPage.jsx ===
import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { username, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("expires", Date.now() + 2 * 60 * 60 * 1000); // 2 hours
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

export default LoginPage;

// === /client/src/styles/Login.css ===
// .login-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #f4f4f4;
//   padding: 1rem;
// }

// .login-form {
//   background-color: white;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0,0,0,0.1);
//   width: 100%;
//   max-width: 400px;
//   display: flex;
//   flex-direction: column;
// }

// .login-form h2 {
//   margin-bottom: 1.5rem;
//   text-align: center;
// }

// .login-form input {
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 1rem;
// }

// .login-form button {
//   padding: 0.75rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;
// }

// .login-form button:hover {
//   background-color: #0056b3;
// }

// .error {
//   color: red;
//   text-align: center;
// }

// @media screen and (max-width: 600px) {
//   .login-form {
//     padding: 1rem;
//   }
//   .login-form input,
//   .login-form button {
//     font-size: 0.9rem;
//   }
// }
