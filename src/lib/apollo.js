import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { RestLink } from 'apollo-link-rest';
import { getDataFromTree } from "@apollo/react-ssr";
import withApollo from "next-with-apollo";

const restLink = new RestLink({ uri: "http://localhost:3000/api/" });

const createClient = () => {
  return new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  });
};

export default withApollo(createClient, {getDataFromTree});