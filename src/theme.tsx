import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
  mono: `'Roboto', sans-serif`,
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  config,
});

export default theme;
