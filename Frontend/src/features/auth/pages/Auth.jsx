import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";
import AuthSidebar from "../components/AuthSidebar";

const Auth = ({ isLogin }) => {
  const { user, loading, handleLogin, handleRegister } = useAuth();
  const navigate = useNavigate();

  // Redirect to home if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    setError("");
    
    if (!isLogin && username.trim().length < 3) {
      setError("Username must be at least 3 characters long.");
      return false;
    }
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    let result;
    if (isLogin) {
      result = await handleLogin({ email, password });
    } else {
      result = await handleRegister({ username, email, password });
    }

    if (result && result.success) {
      toast.success(isLogin ? "Welcome back!" : "Account created successfully!");
      navigate("/");
    } else if (result && result.error) {
      toast.error(result.error);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4" style={{ background: '#0e0e11' }}>
        <div className="flex flex-col items-center gap-5">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-16 w-16 rounded-full bg-indigo-500/20 animate-ping"></div>
            <div className="relative h-12 w-12 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-sm font-semibold text-zinc-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {isLogin ? "Signing you in..." : "Creating your account..."}
            </h1>
            <p className="text-xs text-zinc-500">
              {isLogin ? "Authenticating your credentials" : "Setting up your workspace"}
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex h-screen w-full overflow-hidden text-white" style={{ background: '#0e0e11' }}>

      {/* ─── Left Panel: Shared Auth Sidebar ─── */}
      <AuthSidebar />

      {/* ─── Right Panel: Auth Form ─── */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center p-6 sm:p-12" style={{ background: '#09090B' }}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Auth Card (Glassmorphic) */}
        <div className="relative z-10 w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-xl p-8 shadow-2xl">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
              <span className="material-symbols-outlined text-indigo-400 text-base">neurology</span>
            </div>
            <span className="text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>ResumeAI</span>
          </div>

          {/* Headline */}
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-sm text-zinc-400">
              {isLogin ? "Sign in to continue your interview prep journey" : "Start your AI-powered interview prep journey"}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">error</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Username (Register Only) */}
            {!isLogin && (
              <div>
                <label className="sr-only" htmlFor="username">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-zinc-500">person</span>
                  </div>
                  <input
                    className="w-full bg-zinc-900 border border-zinc-700 focus:border-indigo-500 text-white rounded-lg pl-10 pr-4 py-2.5 ring-offset-black focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all outline-none placeholder:text-zinc-500"
                    id="username"
                    name="username"
                    placeholder="johndoe"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-zinc-500">mail</span>
                </div>
                <input
                  className="w-full bg-zinc-900 border border-zinc-700 focus:border-indigo-500 text-white rounded-lg pl-10 pr-4 py-2.5 ring-offset-black focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all outline-none placeholder:text-zinc-500"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-zinc-500">lock</span>
                </div>
                <input
                  className="w-full bg-zinc-900 border border-zinc-700 focus:border-indigo-500 text-white rounded-lg pl-10 pr-10 py-2.5 ring-offset-black focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all outline-none placeholder:text-zinc-500"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              className="w-full flex items-center justify-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-4 py-2.5 font-semibold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/20 text-sm mt-4"
              type="submit"
            >
              <span>{isLogin ? "Sign In" : "Create Account"}</span>
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-zinc-400">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <Link to={"/register"} className="text-indigo-500 hover:text-indigo-400 transition-colors font-medium">Register</Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to={"/login"} className="text-indigo-500 hover:text-indigo-400 transition-colors font-medium">Sign in</Link>
              </>
            )}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Auth;
