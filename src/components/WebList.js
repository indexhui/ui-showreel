import { Flex, Grid, GridItem } from '@chakra-ui/react';
import WebCard from 'components/WebCard';

import { motion, AnimatePresence } from 'framer-motion';

const MotionGridItem = motion(GridItem);
const WebList = props => {
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
        border="1px solid blue"
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
              border="1px solid red"
              layout
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 5 }}
            >
              <WebCard {...item} />
            </MotionGridItem>
          ))}
        </AnimatePresence>
      </Grid>
    </Flex>
  );
};

export default WebList;
