import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';
import PortfolioCard from 'components/PortfolioCard';
import PortfolioList from 'components/PortfolioList';

// import imageUrlBuilder from '@sanity/image-url';
import sanityFetcher from 'service/helper';
// const builder = imageUrlBuilder(sanityClient);

import { useResourceService } from 'service';

export function PortfolioPage() {
  const [data, setData] = useState(null);
  const { getPortfolio } = useResourceService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPortfolio();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <Flex w="100%" direction="column">
      {data && <PortfolioList data={data} />}
    </Flex>
  );
}
