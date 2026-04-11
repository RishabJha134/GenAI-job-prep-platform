import React from "react";
import "../auth.form.scss";
import { Link } from "react-router";

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="auth-page">
      <div className="form-container">
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to your account</p>
        <form onSubmit={handleSubmit}>
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
          <button className="button primary-button">Sign in</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
