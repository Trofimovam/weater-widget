import EditUserForm from "./EditUserForm";
import Header from "../Header";
import React, { useCallback } from "react";
import { Container, Button, Title, TopContainer } from "./styled";
import { Form } from "react-final-form";
import { PUT_EDIT_USER } from "../../helpers/mutation";
import { User, UserRequest } from "../types/types";
import omit from "lodash/omit";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useMutation } from "@apollo/client";

export default function EditUser() {
  const { user } = useCurrentUser();
  const [editUser] = useMutation<{ editUser: User }, UserRequest>(
    PUT_EDIT_USER,
  );

  const handleEditUserClick = useCallback(
    async (data) => {
      if (data.password === data.confirmationPassword) {
        const newData = omit({ ...data, id: user?.id }, "confirmationPassword");
        await editUser({
          variables: {
            id: newData.id,
            firstName: newData.firstName,
            secondName: newData.secondName,
            email: newData.email,
            password: newData.password,
          },
        });
      }
    },
    [editUser, user?.id],
  );

  return (
    <Container>
      <Header />
      <Form
        onSubmit={handleEditUserClick}
        initialValues={user}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TopContainer>
              <Title>
                {user?.firstName} {user?.secondName}
              </Title>
              <Button type='submit'>Сохранить</Button>
            </TopContainer>
            <EditUserForm />
          </form>
        )}
      />
    </Container>
  );
}
