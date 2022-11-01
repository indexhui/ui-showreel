import { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';

import Filter from 'components/Filter';
import WebsiteList from 'components/WebsiteList';
// import WebList from 'components/WebList';

export function WebsitePage() {
  const [data, setData] = useState(null);

  const fetchContent = `*[_type == "website" && $keyword in tag[] -> name]{
      name,
      link,
      tag[]->{name},
      authors[]->{name,link},
      color,
      image{
        asset->{
          _id,
          url
        },
      },
    }
    `;
  const params = {
    keyword: 'wordpress',
  };

  useEffect(() => {
    sanityClient
      .fetch(fetchContent, params)
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  console.log(data);

  return (
    <Flex w="100%" direction="column">
      <Filter />
      {data && <WebsiteList data={data} />}
    </Flex>
  );
}
