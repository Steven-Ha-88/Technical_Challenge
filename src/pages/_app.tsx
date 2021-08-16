import type { AppProps } from 'next/app';
import {
  ApolloProvider,
} from "@apollo/client";
import { CartStateProvider } from "../lib/cartState";
import client from './../lib/apollo';

import '../global.css';

const QogitaApp = ({ Component, pageProps}): JSX.Element => (
  <ApolloProvider client={client}>
    <CartStateProvider>
      <Component {...pageProps} />
    </CartStateProvider>
  </ApolloProvider>
);

export default QogitaApp;
