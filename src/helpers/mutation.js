import { gql } from "@apollo/client";

export const PUT_SING_UP = gql`
  mutation signup(
    $firstName: String
    $secondName: String
    $email: String
    $password: String
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
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        firstName
        secondName
        email
      }
    }
  }
`;

export const PUT_EDIT_USER = gql`
  mutation editUser(
    $id: Int!
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String
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
