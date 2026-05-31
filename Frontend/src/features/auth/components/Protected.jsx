import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

function Protected({ children }) {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-slate-700 dark:text-slate-200">
        <h1 className="text-lg font-medium">Loading from Protected Route...</h1>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />
  }
  return children;
}

export default Protected;
