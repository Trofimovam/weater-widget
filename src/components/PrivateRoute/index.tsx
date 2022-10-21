import React from "react";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }): ReactElement | null {
  // const { isSignedIn, loading } = useCurrentUser()
  // const from = useLocation().pathname

  // if (loading) return null
  const isSignedIn = true;
  return isSignedIn ? children : <Navigate to={"/login"} />;
}
 