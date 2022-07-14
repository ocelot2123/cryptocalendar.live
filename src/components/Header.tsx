import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Link, Button, Flex } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex marginLeft={'auto'} marginTop="20px" marginRight="10px">
      <Link
        _hover={undefined}
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeMQjsrAIpeuTC6jMWRAaQCh-6Y7zVya8UEBrbsu98ClQX8Jg/viewform"
      >
        <Button variant="ghost" width={'150px'} whiteSpace="normal">
          List Your Event
        </Button>
      </Link>
      <DarkModeSwitch />
    </Flex>
  );
};
