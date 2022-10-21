import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Routes from "./components/Routes";

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}
