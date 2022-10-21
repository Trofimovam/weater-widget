import React from "react";
import Header from "../Header";
import { data } from "./data";
import { Container } from "./styled";

export default function DataList() {
  return (
    <Container>
      <Header />
      {/* {data.map((process) => (
        <ProcessItem process={process} />
      ))} */}
      {/* <EditUserForm /> */}
    </Container>
  );
}
