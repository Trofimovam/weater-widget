import { useContext } from "react";
import {
  CurrentUserContext,
  CurrentUserContextI,
} from "../contexts/CurrentUserContext";

export function useCurrentUser(): CurrentUserContextI {
  return useContext<CurrentUserContextI>(CurrentUserContext);
}
