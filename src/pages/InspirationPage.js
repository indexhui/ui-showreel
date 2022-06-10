import { Flex, Text } from '@chakra-ui/react';
import Filter from 'components/Filter';
import useCsv from 'hooks/useCsv';
import webCsv from 'assets/csv/web.csv';
import WebList from 'components/WebList';

export function InspirationPage() {
  const { data: webData } = useCsv(webCsv);
  return (
    <Flex w="100%" direction="column">
      <Filter />
      <WebList data={webData} />
    </Flex>
  );
}
