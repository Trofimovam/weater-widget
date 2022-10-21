import React from "react";
import { ContainerForm, Button, StyledInput } from "./styled";
import { Field, Form } from "react-final-form";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  const onSubmit = () => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <ContainerForm onSubmit={handleSubmit}>
          <Field
            name='eMail'
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
