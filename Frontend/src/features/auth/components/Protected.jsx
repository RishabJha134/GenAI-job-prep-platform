import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

function Protected({ children }) {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#0e0e11' }}>
        <div className="flex flex-col items-center gap-5">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-16 w-16 rounded-full bg-indigo-500/20 animate-ping"></div>
            <div className="relative h-12 w-12 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-sm font-semibold text-zinc-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Loading...</h1>
            <p className="text-xs text-zinc-500">Verifying your session</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default Protected;
