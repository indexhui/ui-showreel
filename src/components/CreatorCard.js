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

const CreatorCard = props => {
  const { name, intro, cover, avatar, tag, level, link } = props;
  const { url: coverUrl } = useImageBuilder(cover);
  const { url: avatarUrl } = useImageBuilder(avatar);
  return (
    <Flex
      as={Link}
      href={link}
      isExternal
      w="100%"
      direction="column"
      bgColor="white"
      color="gray.800"
      rounded="md"
      overflow="hidden"
      _hover={{ bg: 'blue.600', color: 'white', textDecoration: 'none' }}
      role="group"
    >
      <AspectRatio w="100%" ratio={400 / 132}>
        <Image
          fallback={<Skeleton />}
          rounded="md"
          src={coverUrl}
          alt={name}
          objectFit="cover"
        />
      </AspectRatio>
      <VStack mt="-30px" zIndex="1">
        <Image
          w="50px"
          fallback={<Skeleton />}
          rounded="xl"
          src={avatarUrl}
          alt={name}
          objectFit="cover"
          shadow="md"
        />
        <Text
          textStyle="text1"
          px="10px"
          _groupHover={{ color: 'white', textDecoration: 'none' }}
        >
          {name}
        </Text>
      </VStack>
      <Flex
        flex="1"
        direction="column"
        justify="space-between"
        align="center"
        p={{ base: '12px', lg: '16px' }}
        pt={{ base: '0px', lg: '2px' }}
      >
        <Text
          textStyle="text2"
          textAlign="center"
          color="gray.600"
          mb="-10px"
          _groupHover={{ color: 'white', textDecoration: 'none' }}
        >
          {intro}
        </Text>
        {tag && level && (
          <Flex pt="10px" w="90%" wrap="wrap" justify="center">
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
            {level?.map((item, index) => (
              <Flex
                key={item.nameCN + index}
                textStyle="text3"
                px="10px"
                my="3px"
                mx="4px"
                bgColor="gray.200"
                color="gray.600"
                rounded="full"
              >
                {item.nameCN}
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default CreatorCard;
