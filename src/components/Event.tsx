import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Show,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FC } from 'react';
import dayjs from 'dayjs';

type Event = {
  name: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  link: string;
  twitter: string;
  description: string;
};

type EventProp = {
  events: Event[];
};

function eventSort(a, b) {
  if (dayjs(a.startDate) < dayjs(b.startDate)) {
    return -1;
  }
  if (dayjs(a.startDate) > dayjs(b.startDate)) {
    return 1;
  }
  return 0;
}

export const Event: FC<EventProp> = ({ events }) => (
  <>
    <Heading
      as="h1"
      marginTop={'100px'}
      marginBottom={'75px'}
      textAlign={'center'}
    >
      Upcoming Events
    </Heading>
    <Accordion
      allowToggle
      allowMultiple
      width={{ base: '90%', md: '80%', xl: '70%' }}
      marginBottom="75px"
    >
      {events.sort(eventSort).map(function (event, i) {
        return (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton display="flex" alignItems={'center'}>
                <Box display="flex" textAlign="left" gap={3}>
                  <Box minWidth={'75px'}>
                    {dayjs(event.startDate).format('DD MMM')}
                  </Box>
                  <Box>{event.name}</Box>
                </Box>
                <Box marginLeft={'auto'} display="flex" alignItems={'center'}>
                  <Show above="md">{event.city + ', ' + event.country}</Show>
                  <AccordionIcon marginLeft={'25px'} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Show below="md">
                <Text fontSize="xs">{event.city + ', ' + event.country}</Text>
              </Show>
              <Text whiteSpace="pre-line" marginBottom="25px">
                {event.description}
              </Text>
              <ChakraLink href={event.link} target="_blank">
                Website
              </ChakraLink>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  </>
);
