import { Link as ChakraLink } from '@chakra-ui/react';

export const BlueLink = ({ link, text }) => (
  <ChakraLink
    href={link}
    color="#0085ab"
    _hover={{ color: '#009ac7' }}
    textDecoration="underline"
    target="_blank"
  >
    {text}
  </ChakraLink>
);
