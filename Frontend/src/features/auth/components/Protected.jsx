import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

function Protected({ children }) {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#09090B' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
          <h1 className="text-sm font-medium text-zinc-400">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />
  }
  return children;
}

export default Protected;
