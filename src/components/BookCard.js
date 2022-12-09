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
} from '@chakra-ui/react';
import useImageBuilder from 'hooks/useImageBuilder';

const BookCard = props => {
  const { image, name, tag, description, recommend, authors, link } = props;
  const { url } = useImageBuilder(image);
  const { url: avatar } = useImageBuilder(authors[0].image);
  return (
    <Flex
      bgColor="white"
      color="gray.800"
      w="100%"
      rounded="md"
      overflow="hidden"
      p="16px"
      direction="column"
    >
      <Flex>
        <Image
          w="120px"
          h="160px"
          objectFit="cover"
          fallback={<Skeleton />}
          rounded="sm"
          src={url}
          alt={name}
        />
        <VStack pl="12px" align="flex-start">
          <Text textStyle="text1" color="gray.900">
            {name}
          </Text>
          <Text textStyle="text2" noOfLines={3}>
            {description}
          </Text>
        </VStack>
      </Flex>
      {tag && (
        <HStack py="10px" borderBottom="1px solid" borderColor="gray.300">
          {tag.map(item => (
            <Flex
              key={item.name}
              textStyle="text3"
              px="10px"
              bgColor="gray.200"
              color="gray.600"
              rounded="full"
            >
              {item.name}
            </Flex>
          ))}
        </HStack>
      )}

      <Flex
        h="100%"
        direction="column"
        align="flex-start"
        spacing="5px"
        pt="8px"
      >
        <Text textStyle="text3" color="gray.500">
          推薦與書評
        </Text>
        <Flex flex="1">
          <Text textStyle="text2" color="gray.600">
            {recommend}
          </Text>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          {authors.map(item => (
            <HStack key={item.name}>
              <Avatar w="32px" h="32px" src={avatar} />
              <Text>{item.name}</Text>
            </HStack>
          ))}
          {link && (
            <Link href={link}>
              <Text color="blue.500">看完整書評</Text>
            </Link>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BookCard;
