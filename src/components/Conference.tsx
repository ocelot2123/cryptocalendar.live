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
} from "@chakra-ui/react";
import { FC } from "react";
import dayjs from "dayjs";

type Conference = {
  name: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  link: string;
  twitter: string;
  description: string;
};

type ConferenceProp = {
  conferences: Conference[];
};

function conferenceSort(a, b) {
  if (a.startDate < b.startDate) {
    return -1;
  }
  if (a.startDate > b.startDate) {
    return 1;
  }
  return 0;
}

export const Conference: FC<ConferenceProp> = ({ conferences }) => (
  <>
    <Heading
      as="h1"
      marginTop={"100px"}
      marginBottom={"75px"}
      textAlign={"center"}
    >
      Upcoming Conferences
    </Heading>
    <Accordion
      allowToggle
      allowMultiple
      width={{ base: "90%", md: "80%", xl: "70%" }}
    >
      {conferences.sort(conferenceSort).map((conference) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton display="flex" alignItems={"center"}>
                <Box display="flex" textAlign="left" gap={3}>
                  <Box minWidth={"75px"}>
                    {dayjs(conference.startDate).format("DD MMM")}
                  </Box>
                  <Box>{conference.name}</Box>
                </Box>
                <Box marginLeft={"auto"} display="flex" alignItems={"center"}>
                  <Show above="lg">
                    {conference.city + ", " + conference.country}
                  </Show>
                  <AccordionIcon marginLeft={"25px"} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Show below="lg">
                <Text fontSize="xs">
                  {conference.city + ", " + conference.country}
                </Text>
              </Show>
              {conference.description}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  </>
);
