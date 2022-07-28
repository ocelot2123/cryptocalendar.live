import { Box, Flex, Heading } from '@chakra-ui/react';
import { EventFilters } from './EventFilters';
import { EventAccordion } from './EventAccordion';
import { FC, useState } from 'react';

export type EventType = {
  name: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  link: string;
  twitter: string;
  description: string;
};

export type EventProp = {
  events: EventType[];
};

function stringSort(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function createCountryCityMap(events) {
  var obj = {};
  events.map(function (event) {
    if (!(event.country in obj)) {
      obj[event.country] = [event.city];
    } else {
      obj[event.country].push(event.city);
    }
  });
  return obj;
}

export const Event: FC<EventProp> = ({ events }) => {
  const [cityFilter, setCityFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  return (
    <>
      <Heading
        as="h1"
        marginTop={'50px'}
        marginBottom={'30px'}
        textAlign={'center'}
      >
        Upcoming Events
      </Heading>
      <Flex
        width={{ base: '90%', md: '80%', xl: '70%' }}
        flexDirection={'column'}
      >
        <Box marginBottom={'20px'} marginLeft={{ base: '0', md: 'auto' }}>
          <EventFilters
            cities={[
              ...new Set(
                events
                  .map(o => o.city)
                  .filter(o => o)
                  .sort(stringSort),
              ),
            ]}
            cityFilter={cityFilter}
            setCityFilter={setCityFilter}
            countries={[
              ...new Set(events.map(o => o.country).sort(stringSort)),
            ]}
            countryFilter={countryFilter}
            setCountryFilter={setCountryFilter}
            countryCityMap={createCountryCityMap(events)}
          />
        </Box>
        <EventAccordion
          events={events}
          cityFilter={cityFilter}
          countryFilter={countryFilter}
        />
      </Flex>
    </>
  );
};
