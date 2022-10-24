import React from "react";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function PrivateRoute({ children }): ReactElement | null {
  const { isSignedIn, loading } = useCurrentUser();

  if (loading) return null;

  return isSignedIn ? children : <Navigate to={"/login"} />;
}
