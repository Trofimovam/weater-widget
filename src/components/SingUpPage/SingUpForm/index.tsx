import React, { useState } from "react";
import {
  ContainerForm,
  Button,
  StyledInput,
  Title,
  LaberError,
} from "./styled";
import { Field, Form } from "react-final-form";
import { NavLink } from "react-router-dom";
import { PUT_SING_UP } from "../../../helpers/mutation";
import { useMutation } from "@apollo/client";
import { omit } from "lodash/omit";
const required = (value) => (value ? false : true);

export default function SingUpForm() {
  const [isErrorPassword, setErrorPassword] = useState(false);
  const [singUp] = useMutation(PUT_SING_UP);
  const onSubmit = (data) => {
    if (data.password === data.confirmationPassword)
      singUp(omit(data, "confirmationPassword"));
    else {
      setErrorPassword(true);
    }
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <ContainerForm onSubmit={handleSubmit}>
          <Title>Регистрация</Title>
          <Field
            name='firstName'
            validate={required}
            render={({ input, meta }) => (
              <>
                <StyledInput
                  {...input}
                  className={meta.error && meta.touched && "error"}
                  placeholder='Имя'
                />
                <LaberError>
                  {meta.error && meta.touched && "Произошла ошибка"}
                </LaberError>
              </>
            )}
          />
          <Field
            name='secondName'
            validate={required}
            render={({ input, meta }) => (
              <>
                <StyledInput
                  {...input}
                  className={meta.error && meta.touched && "error"}
                  placeholder='Фамилия'
                />
                <LaberError>
                  {meta.error && meta.touched && "Произошла ошибка"}
                </LaberError>
              </>
            )}
          />
          <Field
            name='email'
            validate={required}
            render={({ input, meta }) => (
              <>
                <StyledInput
                  {...input}
                  className={meta.error && meta.touched && "error"}
                  placeholder='Электронная почта'
                />
                <LaberError>
                  {meta.error && meta.touched && "Произошла ошибка"}
                </LaberError>
              </>
            )}
          />
          <Field
            name='password'
            validate={required}
            render={({ input, meta }) => (
              <>
                <StyledInput
                  {...input}
                  placeholder='Введите пароль'
                  className={
                    ((meta.error && meta.touched) || isErrorPassword) && "error"
                  }
                />
                <LaberError>
                  {((meta.error && meta.touched) || isErrorPassword) &&
                    "Произошла ошибка"}
                </LaberError>
              </>
            )}
            type='password'
          />
          <Field
            name='confirmationPassword'
            validate={required}
            render={({ input, meta }) => (
              <>
                <StyledInput
                  {...input}
                  className={
                    ((meta.error && meta.touched) || isErrorPassword) && "error"
                  }
                  placeholder='Повторите пароль'
                />
                <LaberError>
                  {((meta.error && meta.touched) || isErrorPassword) &&
                    "Произошла ошибка"}
                </LaberError>
              </>
            )}
            type='password'
          />
          <Button type='submit'>Применить и войти</Button>
          <div>
            Уже зарегестрированы? <NavLink to='/login'>Вход</NavLink>
          </div>
        </ContainerForm>
      )}
    />
  );
}
