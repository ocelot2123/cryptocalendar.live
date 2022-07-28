import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo = () => {
  const { colorMode } = useColorMode();

  if (colorMode === 'light') {
    return (
      <Image
        src="/static/images/logo_light.png"
        priority={true}
        height="75px"
        width="200px"
      />
    );
  } else {
    return (
      <Image
        src="/static/images/logo_dark.png"
        priority={true}
        height="75px"
        width="200px"
      />
    );
  }
};
