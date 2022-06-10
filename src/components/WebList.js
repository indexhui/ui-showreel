import { Flex, Grid, GridItem } from '@chakra-ui/react';
import WebCard from 'components/WebCard';

const WebList = props => {
  const { data } = props;
  return (
    <Flex
      justify="center"
      px={{ base: '20px', lg: '5%', xl: '100px' }}
      pt="40px"
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
            <WebCard {...item} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default WebList;
