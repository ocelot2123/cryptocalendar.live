import { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Crypto Calendar Live - Crypto Events Calendar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Crypto Calendar Live is an events and conferences aggregator for all things crypto, blockchain, and web3 related."
        />
        <meta name="robots" content="index, follow, noodp, noydir" />
        <meta
          name="keywords"
          content="crypto,web3,blockchain,events,conferences,crypto calendar"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
