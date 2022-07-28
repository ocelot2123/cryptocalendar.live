import { Flex, Text } from '@chakra-ui/react';
import { BlueLink } from './BlueLink';

export const Footer = () => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    textAlign="center"
    position="fixed"
    bottom={0}
    width="100%"
    bg={'#34464f'}
  >
    <Text color="white" width="80%">
      {"If you like what we're doing, feel free to drop us a "}
      <BlueLink
        link={
          'https://etherscan.io/address/0x855a84954fCFBA1a41eb43215a83fbAC0b3FD9Ef'
        }
        text={'Donation'}
      />
      {' to keep us going!'}
    </Text>
  </Flex>
);
