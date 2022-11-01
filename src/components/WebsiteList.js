import { Flex, Grid, GridItem } from '@chakra-ui/react';
import WebsiteCard from 'components/WebsiteCard';

import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const WebsiteList = props => {
  const { data } = props;
  return (
    <Flex
      justify="center"
      minH="500px"
      px={{ base: '20px', lg: '5%', xl: '100px' }}
      pt="40px"
      pb="20px"
    >
      <Grid
        px={{ base: '10px', lg: '10%', xl: '6%' }}
        w="100%"
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(4,1fr)',
        }}
        gap={6}
      >
        {data?.map((item, index) => (
          <GridItem key={index}>
            <WebsiteCard {...item} image={urlFor(item.image).url()} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default WebsiteList;
