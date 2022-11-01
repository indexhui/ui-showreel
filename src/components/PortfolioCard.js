import {
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Box,
  HStack,
  VStack,
  Skeleton,
} from '@chakra-ui/react';

const PortfolioCard = props => {
  const { image, title, link, content, metaDes } = props;
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      border="1px solid #ccc"
      borderRadius="7px 20px 7px 20px"
      overflow="hidden"
    >
      <Link href={link} isExternal>
        <AspectRatio w="100%" ratio={5 / 2}>
          <Image
            rounded="md"
            src={image}
            fallback={<Skeleton />}
            alt={title}
            objectFit="cover"
          />
        </AspectRatio>
        <VStack spacing="5px" px="20px" pb="15px" align="flex-start">
          <Text
            color="grey.700"
            pt="10px"
            letterSpacing="0.025em"
            fontSize="16px"
          >
            {title}
          </Text>
          <Text fontSize="14px" color="grey.550" noOfLines={2}>
            {content || metaDes}
          </Text>
        </VStack>
      </Link>
    </Flex>
  );
};

export default PortfolioCard;
