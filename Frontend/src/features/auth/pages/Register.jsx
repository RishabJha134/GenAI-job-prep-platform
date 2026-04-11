import React from "react";
import "../auth.form.scss";
import {Link, useNavigate} from "react-router"

const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const navigate = useNavigate(); 


  
  return (
    <main className="auth-page">
      <div className="form-container">
        <h1>Welcome back</h1>
        <p className="subtitle">Register to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
            />
          </div>
          <button className="button primary-button">Register</button>
        </form>

        <p className="register-link">Already have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
