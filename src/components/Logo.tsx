import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo = () => {
  const { colorMode } = useColorMode();

  if (colorMode === 'light') {
    return (
      <Image src="/static/images/logo_light.png" height="75px" width="200px" />
    );
  } else {
    return (
      <Image src="/static/images/logo_dark.png" height="75px" width="200px" />
    );
  }
};
