import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  cities: string[];
  cityFilter: string;
  setCityFilter: Dispatch<SetStateAction<string>>;
  countries: string[];
  countryFilter: string;
  setCountryFilter: Dispatch<SetStateAction<string>>;
  countryCityMap: {};
};

export const EventFilters: FC<Props> = ({
  cities,
  cityFilter,
  setCityFilter,
  countries,
  countryFilter,
  setCountryFilter,
  countryCityMap,
}) => {
  return (
    <Flex gap={'10px'}>
      <Menu placement="bottom-start">
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {cityFilter ? cityFilter : 'City'}
        </MenuButton>
        <MenuList minWidth={'200px'} maxHeight={'50vh'} overflowX="auto">
          <MenuItem key={0} onClick={() => setCityFilter('')}>
            {'Reset Filter'}
          </MenuItem>
          {cities
            .filter(function (city) {
              return countryFilter
                ? countryCityMap[countryFilter].indexOf(city) > -1
                : true;
            })
            .map(function (city, index) {
              return (
                <MenuItem key={index + 1} onClick={() => setCityFilter(city)}>
                  {city}
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
      <Menu placement="bottom-start">
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {countryFilter ? countryFilter : 'Country'}
        </MenuButton>
        <MenuList minWidth={'200px'} maxHeight={'50vh'} overflowX="auto">
          <MenuItem key={0} onClick={() => setCountryFilter('')}>
            {'Reset Filter'}
          </MenuItem>
          {countries
            .filter(function (country) {
              return cityFilter
                ? countryCityMap[country].indexOf(cityFilter) > -1
                : true;
            })
            .map(function (country, index) {
              return (
                <MenuItem
                  key={index + 1}
                  onClick={() => setCountryFilter(country)}
                >
                  {country}
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
    </Flex>
  );
};
