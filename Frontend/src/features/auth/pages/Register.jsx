import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

  const {loading,handleRegister} = useAuth();



  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({username,email,password});
    navigate("/");

  }

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4" style={{ background: '#09090B' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          <h1 className="text-sm font-medium text-zinc-400">Creating your account...</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-10 text-zinc-100" style={{ background: '#09090B' }}>
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full opacity-25" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}></div>
        <div className="absolute right-1/3 bottom-1/3 h-[400px] w-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }}></div>
      </div>

      <div className="animate-fadeIn relative w-full max-w-md rounded-2xl border border-zinc-800 p-8 shadow-2xl shadow-black/40 sm:p-10" style={{ background: '#18181B' }}>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ai-gradient">
          ✦ ResumeAI
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Create your account
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Register to continue
        </p>
        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm font-medium text-zinc-400">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn-shimmer inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-indigo-400 transition hover:text-indigo-300">Sign in</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
