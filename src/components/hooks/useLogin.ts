import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { PUT_LOGIN } from "../../helpers/mutation";

import { Login, LoginRequest } from "../types/types";
import { useCurrentUser } from "./useCurrentUser";

export interface ErrorsI {
  [key: string]: string | string[];
}
export function useLogin(): (
  loginData: LoginRequest,
) => Promise<void | undefined> {
  const [login] = useMutation<{ login: Login }, LoginRequest>(PUT_LOGIN);
  const { refetch } = useCurrentUser();
  const navigate = useNavigate();

  return useCallback(
    async (loginData) => {
      const response = await login({
        variables: { email: loginData.email, password: loginData.password },
      });
      const loginResult = response.data?.login;
      const token = loginResult?.token;
      const email = loginResult?.user?.email;

      if (!token || !email) {
        return;
      }
      localStorage.setItem(email, email);
      localStorage.setItem("authToken", token);
      await refetch?.();
      navigate("/data-list");
    },
    [login, navigate, refetch],
  );
}
