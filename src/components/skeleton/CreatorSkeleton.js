import {
  Flex,
  AspectRatio,
  Grid,
  GridItem,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSkeleton = () => {
  return (
    <Flex w="100%" direction="column">
      <AspectRatio w="100%" ratio={400 / 132}>
        <Skeleton rounded="md" objectFit="cover" />
      </AspectRatio>
      <SkeletonText
        my="10px"
        px="12px"
        noOfLines={4}
        spacing="2"
        skeletonHeight="3"
        textAlign="center"
      />
    </Flex>
  );
};

const CreatorSkeleton = props => {
  return (
    <SimpleGrid w="100%" columns={{ base: 1, lg: 3 }} spacing="32px" pt="12px">
      {Array(...new Array(props.amount || 3)).map((item, index) => (
        <CardSkeleton key={index} />
      ))}
    </SimpleGrid>
  );
};

export default CreatorSkeleton;
