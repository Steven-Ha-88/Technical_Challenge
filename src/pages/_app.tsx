import type { AppProps } from 'next/app';
import {
  ApolloProvider,
} from "@apollo/client";
import { CartStateProvider } from "../lib/cartState";
import apolloData from './../lib/apollo';

import '../global.css';

const QogitaApp = ({ Component, pageProps, apollo }): JSX.Element => (
  <ApolloProvider client={apollo}>
    <CartStateProvider>
      <Component {...pageProps} />
    </CartStateProvider>
  </ApolloProvider>
);

QogitaApp.getInitialProps = async function ({ Component, ctx }: any) {
  let pageProps:any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default apolloData(QogitaApp);
