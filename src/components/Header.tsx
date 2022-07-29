import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Button, Grid, GridItem, Link } from '@chakra-ui/react';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <Grid
      width="90%"
      justifyContent={'center'}
      templateColumns={{ base: '1fr 1fr', sm: '1fr auto 1fr' }}
      marginTop="15px"
      alignItems={'center'}
    >
      <GridItem colStart={{ base: 1, md: 2 }}>
        <Logo />
      </GridItem>
      <GridItem marginLeft={'auto'} colStart={{ base: 2, sm: 3 }}>
        <Link
          _hover={undefined}
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeMQjsrAIpeuTC6jMWRAaQCh-6Y7zVya8UEBrbsu98ClQX8Jg/viewform"
        >
          <Button
            variant="ghost"
            fontSize="md"
            width={'125px'}
            whiteSpace="normal"
          >
            List Your Event
          </Button>
        </Link>
        <DarkModeSwitch />
      </GridItem>
    </Grid>
  );
};
