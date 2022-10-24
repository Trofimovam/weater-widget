import React, { ReactElement, ReactNode } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFetchCurrentUser } from "../hooks/useFetchCurrentUser";

interface CurrentUserProviderProps {
  children: ReactNode;
}

export default function CurrentUserProvider({
  children,
}: CurrentUserProviderProps): ReactElement {
  const { currentUser, refetch, loading } = useFetchCurrentUser();

  const signOut = async (): Promise<void> => {
    localStorage.removeItem("email");
    localStorage.removeItem("authToken");
    refetch();
  };

  const value = {
    isSignedIn: currentUser !== null && typeof currentUser !== "undefined",
    user: currentUser,
    signOut,
    refetch,
    loading,
  };
  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}
