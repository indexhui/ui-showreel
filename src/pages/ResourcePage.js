import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';

import ResourceMenu from 'components/ResourceMenu';
import ResourceList from 'components/ResourceList';
import useCsv from 'hooks/useCsv';
import resourceCsv from 'assets/csv/resource.csv';

export function ResourcePage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const { data: resourceData } = useCsv(resourceCsv);

  useEffect(() => {
    const filter = location.pathname.split('/')[2];
    const filteredData = resourceData.filter(
      collection => collection.type === filter
    );
    setData(filteredData);
  }, [location, resourceData]);

  return (
    <Flex w="100%" direction="column">
      <ResourceMenu />
      <ResourceList data={data} />
    </Flex>
  );
}
