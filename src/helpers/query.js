import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query allUsers {
    allUsers {
      id
      firstName
      secondName
      email
    }
  }
`;
export const GET_CURRENT_USERS = gql`
  query currentUser {
    currentUser {
      id
      firstName
      secondName
      email
    }
  }
`;
export const GET_USER_BY_ID = gql`
  query userById($id: number) {
    userById(id: $id) {
      id
      firstName
      secondName
      email
    }
  }
`;

export const GET_PROCESS_LIST = gql`
  query processList {
    processList {
      id
      name
      numberOfExecutions
      averageLeadTime
      averageActiveTime
      employeesInvolvedProcess
      numberOfScenarios
      start
      end
      loading
    }
  }
`;
