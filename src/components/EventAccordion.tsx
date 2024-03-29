import { FC } from 'react';
import { EventType } from './Event';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Show,
  Text,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { BlueLink } from './BlueLink';

type EventAccordionProp = {
  events: EventType[];
  cityFilter: string;
  countryFilter: string;
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

export const EventAccordion: FC<EventAccordionProp> = ({
  events,
  cityFilter,
  countryFilter,
}) => (
  <Accordion allowToggle allowMultiple marginBottom="75px">
    {events
      .sort(eventSort)
      .filter(function (event) {
        return cityFilter ? event.city === cityFilter : true;
      })
      .filter(function (event) {
        return countryFilter ? event.country === countryFilter : true;
      })
      .map(function (event, i) {
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
                  {event.city ? (
                    <Show above="md">{event.city + ', ' + event.country}</Show>
                  ) : (
                    <Show above="md">{event.country}</Show>
                  )}
                  <AccordionIcon marginLeft={'25px'} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Show below="md">
                {event.city ? (
                  <Text fontSize="xs">{event.city + ', ' + event.country}</Text>
                ) : (
                  <Text fontSize="xs">{event.country}</Text>
                )}
              </Show>
              <Text whiteSpace="pre-line" marginBottom="25px">
                {event.description}
              </Text>
              <Flex gap="10px">
                {event.link ? (
                  <BlueLink link={event.link} text={'Website'} />
                ) : (
                  <></>
                )}
                {event.twitter ? (
                  <BlueLink link={event.twitter} text={'Twitter'} />
                ) : (
                  <></>
                )}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
  </Accordion>
);
