import {
  Flex,
  AspectRatio,
  Grid,
  GridItem,
  Skeleton,
  SkeletonCircle,
  HStack,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSkeleton = () => {
  return (
    <Flex w="100%" direction="column">
      <AspectRatio w="100%" ratio={14 / 9}>
        <Skeleton w="100%" />
      </AspectRatio>
      <Skeleton h="16px" w="80%" my="10px" />
      <Flex justify="space-between">
        <HStack>
          <SkeletonCircle size="18px" />
          <SkeletonCircle size="18px" />
        </HStack>
        <Skeleton h="16px" w="80px" my="10px" />
      </Flex>
    </Flex>
  );
};

const WebpageSkeleton = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      px={{ base: '20px', lg: '5%', xl: '100px' }}
      pb="20px"
      pt="48px"
    >
      <Grid
        // px={{ base: '10px', lg: '10%', xl: '6%' }}
        w="100%"
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(4,1fr)',
        }}
        gap={6}
      >
        {Array(...new Array(8)).map((item, index) => (
          <GridItem key={index}>
            <CardSkeleton />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default WebpageSkeleton;
