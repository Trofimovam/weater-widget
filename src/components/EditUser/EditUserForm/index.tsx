import React from "react";
import { Field } from "react-final-form";
import { ContainerForm, ContainerInput, Label, StyledInput } from "./styled";

export default function EditUserForm() {
  return (
    <ContainerForm>
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
        name='email'
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
  );
}
