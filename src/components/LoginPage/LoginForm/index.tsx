import React, { useCallback } from "react";
import { ContainerForm, Button, StyledInput } from "./styled";
import { Field, Form } from "react-final-form";
import { NavLink } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { LoginRequest } from "../../types/types";

export default function LoginForm() {
  const login = useLogin();

  const handleLoginClick = useCallback(
    async (data: LoginRequest) => {
      await login(data);
    },
    [login],
  );
  return (
    <Form
      onSubmit={handleLoginClick}
      render={({ handleSubmit }) => (
        <ContainerForm onSubmit={handleSubmit}>
          <Field
            name='email'
            render={({ input }) => (
              <StyledInput {...input} placeholder='Электронная почта' />
            )}
          />
          <Field
            name='password'
            render={({ input }) => (
              <StyledInput {...input} placeholder='Введите пароль' />
            )}
            type='password'
          />

          <Button type='submit'>Войти</Button>
          <div>
            <NavLink to='/sing-up'>Зарегистрироваться</NavLink>
          </div>
        </ContainerForm>
      )}
    />
  );
}
