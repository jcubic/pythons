import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const URL = "https://ql.just.net.pl/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL
  })
  // queryDeduplication: false
});

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
