import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROCESS_LIST } from "../../helpers/query";
import Header from "../Header";
import { Processes } from "../types/types";
// import { data } from "./data";
import ProcessItem from "./ProcessItem";
import { Container } from "./styled";

export default function DataList() {
  const { data, loading } = useQuery<{
    processList: Processes[];
  }>(GET_PROCESS_LIST, {
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });

  return (
    <Container>
      <Header />
      {data?.processList.map((process) => (
        <ProcessItem process={process} />
      ))}
      {/*  <EditUserForm /> */}
    </Container>
  );
}
