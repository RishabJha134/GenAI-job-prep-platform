import React, { useState } from "react";
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
    await handleLogin({ email, password });
    navigate("/");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4" style={{ background: '#09090B' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          <h1 className="text-sm font-medium text-zinc-400">
            Signing you in...
          </h1>
        </div>
      </main>
    )
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-10 text-zinc-100" style={{ background: '#09090B' }}>
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}></div>
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}></div>
      </div>

      <div className="animate-fadeIn relative w-full max-w-md rounded-2xl border border-zinc-800 p-8 shadow-2xl shadow-black/40 sm:p-10" style={{ background: '#18181B' }}>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ai-gradient">
          ✦ ResumeAI
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Sign in to your account
        </p>
        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="btn-shimmer inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link to={"/register"} className="font-medium text-indigo-400 transition hover:text-indigo-300">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
