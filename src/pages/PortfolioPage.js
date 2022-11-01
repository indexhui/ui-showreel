import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';
import PortfolioCard from 'components/PortfolioCard';
import PortfolioList from 'components/PortfolioList';

import sanityClient from 'client.js';
// import imageUrlBuilder from '@sanity/image-url';
import sanityFetcher from 'service/helper';
// const builder = imageUrlBuilder(sanityClient);

export function PortfolioPage() {
  const [data, setData] = useState(null);
  const method = `*[_type == "portfolio"]{
      name,
      title,
      relatedUrl,
      link,
    }
    `;

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityFetcher(
        'portfolio',
        'name,title,relatedUrl,link'
      );
      setData(data);
    };

    fetchData();
    // sanityClient
    //   .fetch(
    //     `*[_type == "portfolio"]{
    //   name,
    //   title,
    //   relatedUrl,
    //   link,
    // }
    // `
    //   )
    //   .then(data => setData(data))
    //   .catch(console.error);
  }, []);

  return (
    <Flex w="100%" direction="column">
      {data && <PortfolioList data={data} />}

      {/* <ResourceMenu />
      <ResourceList data={data} /> */}
    </Flex>
  );
}
