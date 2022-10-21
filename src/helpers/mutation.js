import { gql } from "@apollo/client";

export const PUT_SING_UP = gql`
  mutation signup(
    $firstName: string!
    $secondName: string!
    $email: string!
    $password: string!
  ) {
    signup(
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    ) {
      token
    }
  }
`;
export const PUT_LOGIN = gql`
  mutation login($email: string!, $password: string!) {
    login(email: $email, password: $password) {
      id
      firstName
      secondName
      email
    }
  }
`;

export const PUT_EDIT_USER = gql`
  mutation editUser(
    $id: string
    $firstName: string!
    $secondName: string!
    $email: string!
    $password: string!
  ) {
    editUser(
      id: $id
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    ) {
      id
      firstName
      secondName
      email
    }
  }
`;
