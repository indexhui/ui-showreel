import { Flex, Grid, GridItem } from '@chakra-ui/react';
import PortfolioCard from 'components/PortfolioCard';

const PortfolioList = props => {
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
            <PortfolioCard
              image={
                item.relatedUrl.openGraph?.image ||
                item.relatedUrl.metaData?.image
              }
              title={
                item.relatedUrl.openGraph?.title || item.relatedUrl.meta?.title
              }
              link={item.link}
              content={item.relatedUrl.openGraph?.description}
              metaDes={item.relatedUrl.meta?.description}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default PortfolioList;
