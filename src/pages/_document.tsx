import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
