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
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSkeleton = () => {
  return (
    <Flex w="100%" direction="column" p="16px">
      <Flex>
        <Skeleton w="120px" h="150px" />
        <SkeletonText
          flex="1"
          mx="4"
          noOfLines={4}
          spacing="2"
          skeletonHeight="4"
        />
      </Flex>
      <SkeletonText my="2" noOfLines={4} spacing="2" skeletonHeight="3" />
      <Flex justify="space-between">
        <HStack>
          <SkeletonCircle size="32px" />
          <Skeleton h="16px" w="80px" my="10px" />
        </HStack>
      </Flex>
    </Flex>
  );
};

const BookSkeleton = props => {
  return (
    <SimpleGrid w="100%" columns={{ base: 1, lg: 3 }} spacing="32px" pt="12px">
      {Array(...new Array(props.amount || 6)).map((item, index) => (
        <CardSkeleton key={index} />
      ))}
    </SimpleGrid>
  );
};

export default BookSkeleton;
