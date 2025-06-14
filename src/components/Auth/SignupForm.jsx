import React from 'react';
import './Register.css';
// import logo from '../assets/logo.png';
// import dashboardPreview from '../assets/dashboard-preview.png';

const Register = () => {
  return (
    <div className="register-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="register-content-box">
        <div className="left-panel">
          <img src={dashboardPreview} alt="Dashboard Preview" className="screenshot" />
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
          <p>
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="right-panel">
          <h4>Welcome to Dashboard</h4>
          <form className="register-form">
            <label htmlFor="fullname">Full name*</label>
            <input id="fullname" type="text" placeholder="Full name" required />

            <label htmlFor="email">Email Address*</label>
            <input id="email" type="email" placeholder="Email Address" required />

            <label htmlFor="password">Password*</label>
            <input id="password" type="password" placeholder="Password" required />

            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input id="confirmPassword" type="password" placeholder="Confirm Password" required />

            <button type="submit">Register</button>

            <p className="login-link">
              Already have an account? <a href="#">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;


/* styles/Register.css */

