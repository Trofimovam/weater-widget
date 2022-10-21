import React from "react";
import { Field, Form } from "react-final-form";
import { NavLink } from "react-router-dom";
import { ContainerForm, ContainerInput, Label, StyledInput } from "./styled";

export default function EditUserForm() {
  const onSubmit = () => {};
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <ContainerForm onSubmit={handleSubmit}>
          <Field
            name='firstName'
            render={({ input }) => (
              <ContainerInput>
                <Label>Имя</Label>
                <StyledInput {...input} />
              </ContainerInput>
            )}
          />
          <Field
            name='secondName'
            render={({ input }) => (
              <ContainerInput>
                <Label>Фамилия</Label>
                <StyledInput {...input} />
              </ContainerInput>
            )}
          />
          <Field
            name='eMail'
            render={({ input }) => (
              <ContainerInput>
                <Label>Электронная почта</Label>
                <StyledInput {...input} />
              </ContainerInput>
            )}
          />
          <Field
            name='password'
            render={({ input }) => (
              <ContainerInput>
                <Label>Новый пароль</Label>
                <StyledInput {...input} />
              </ContainerInput>
            )}
            type='password'
          />
          <Field
            name='confirmationPassword'
            render={({ input }) => (
              <ContainerInput>
                <Label>Повторите пароль</Label>
                <StyledInput {...input} />
              </ContainerInput>
            )}
            type='password'
          />
        </ContainerForm>
      )}
    />
  );
}
