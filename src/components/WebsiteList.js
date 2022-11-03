import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import WebsiteCard from 'components/WebsiteCard';

const MotionGridItem = motion(GridItem);
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
        <AnimatePresence>
          {data?.map((item, index) => (
            <MotionGridItem
              key={item.link}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WebsiteCard {...item} image={item.image} />
            </MotionGridItem>
          ))}
        </AnimatePresence>
      </Grid>
    </Flex>
  );
};

export default WebsiteList;
