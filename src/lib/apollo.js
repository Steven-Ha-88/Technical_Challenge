import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { RestLink } from 'apollo-link-rest';


const restLink = new RestLink({ uri: "http://localhost:3000/api/" });

const createClient = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  });

export default createClient;