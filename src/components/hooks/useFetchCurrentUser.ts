import { useQuery, ApolloError, ApolloQueryResult } from "@apollo/client";
import { GET_CURRENT_USERS } from "src/helpers/query";
import { User } from "../types/types";

export function useFetchCurrentUser(): {
  currentUser: User | undefined;
  error: ApolloError | undefined;
  loading: boolean;
  refetch: (variables?: Record<string, any> | undefined) => Promise<
    ApolloQueryResult<{
      currentUser: User;
    }>
  >;
} {
  const { data, error, loading, refetch } = useQuery<{
    currentUser: User;
  }>(GET_CURRENT_USERS, {
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });
  return { currentUser: data?.currentUser, error, loading, refetch };
}
