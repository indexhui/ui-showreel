import { Flex, Grid, GridItem } from '@chakra-ui/react';
import ResourceCard from 'components/ResourceCard';

const ResourceList = props => {
  const { data } = props;
  return (
    <Flex
      justify="center"
      px={{ base: '20px', lg: '5%', xl: '100px' }}
      pt="40px"
      pb="60px"
    >
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(4,1fr)',
        }}
        w="100%"
        gap={6}
      >
        {data?.map((item, index) => (
          <GridItem key={index}>
            <ResourceCard {...item} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default ResourceList;
