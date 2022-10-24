import { createContext } from "react";
import { CurrentUser } from "../types/types";

export interface CurrentUserContextI {
  isSignedIn: boolean;
  loading: boolean;
  signOut?: () => void;
  refetch?: () => Promise<any>;
  user?: CurrentUser;
}

const initialValue = {
  isSignedIn: false,
  loading: false,
};

export const CurrentUserContext =
  createContext<CurrentUserContextI>(initialValue);
