import React, { useState } from "react";
import "../auth.form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin({email,password});
    navigate("/");
  }

  if(loading){
    return (
      <main>
        <h1>Loading from Login.jsx...</h1>
      </main>
    )
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
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
