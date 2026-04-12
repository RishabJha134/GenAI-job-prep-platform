import React, { Children } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router";

function Protected({ children }) {
  const { loading, user } = useAuth();

  if (loading) {
    console.log("Loading from Protected Route...")
    return <h1>Loading from Protected Route...</h1>;
  }

  if (!user) {
    return <Navigate to={"/login"} />
  }
  return children;
}

export default Protected;
