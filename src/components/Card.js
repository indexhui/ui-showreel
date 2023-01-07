import {
  Flex,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Avatar,
  Skeleton,
  Link,
  AspectRatio,
} from '@chakra-ui/react';
import useImageBuilder from 'hooks/useImageBuilder';

const Card = props => {
  const { image, name, intro, link, tag } = props;
  const { url } = useImageBuilder(image);
  return (
    <Flex
      as={Link}
      href={link}
      isExternal
      direction="column"
      w="100%"
      bgColor="white"
      color="gray.800"
      rounded="md"
      overflow="hidden"
      shadow="sm"
      _hover={{ textDecoration: 'none', shadow: 'lg' }}
      role="group"
    >
      {image && (
        <AspectRatio w="100%" ratio={400 / 160}>
          <Image
            fallback={<Skeleton />}
            rounded="md"
            src={url}
            alt={name}
            objectFit="cover"
          />
        </AspectRatio>
      )}
      <Flex
        w="100%"
        flex="1"
        direction="column"
        justify="space-between"
        p="12px"
      >
        <VStack align="flex-start" spacing="4px">
          <Text textStyle="text1">{name}</Text>
          <Text textStyle="text2" color="gray.600" noOfLines={3}>
            {intro}
          </Text>
        </VStack>
        {tag && (
          <Flex ml="-8px">
            {tag?.map(item => (
              <Flex
                key={item.name}
                textStyle="text3"
                px="10px"
                my="3px"
                mx="4px"
                bgColor="gray.200"
                color="gray.600"
                rounded="full"
              >
                {item.name}
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Card;
