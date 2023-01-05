import { useEffect, useState } from 'react';

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

import { useResourceService } from 'service';
import useImageBuilder from 'hooks/useImageBuilder';
import BookSkeleton from 'components/skeleton/BookSkeleton';
import { Container } from 'components/layouts';

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

const BookSection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const { getBook } = useResourceService();

  const type = 'book';
  const content = `name,link,description,recommend,tag[]->{name},authors[]->{name,link,image},image{
        asset->{
          _id,
          url
        },
      }`;
  const method = `*[_type == "${type}"] | order(_createdAt desc)[0..2]{
      ${content}
    }
    `;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getBook(method);
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container
      bgColor="gray.100"
      pt={{ base: '24px', lg: '48px' }}
      pb={{ base: '16px', lg: '24px' }}
      align="flex-start"
    >
      <Text textStyle="heading2">書單推薦</Text>
      <Text textStyle="text2">
        你是剛對 UIUX 產生興趣的夥伴嗎? 想從書中學習嗎? 從這邊的推薦挑選一本吧 ~
      </Text>
      {isLoading && <BookSkeleton amount={3} />}

      <SimpleGrid
        w="100%"
        columns={{ base: 1, lg: 3 }}
        spacing="32px"
        pt="12px"
      >
        {data.map(item => (
          <BookCard key={item.name} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BookSection;
