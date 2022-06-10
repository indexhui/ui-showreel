import { useContext } from 'react';
import {
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Box,
  HStack,
  Skeleton,
} from '@chakra-ui/react';
import WebContext from 'store/WebContext';

const DetailBar = props => {
  const { author, color } = props;
  const colors = color?.split('_');

  return (
    <Flex w="100%" justify="space-between" pb="10px">
      <HStack>
        {colors.map((color, index) => (
          <Box
            key={index + color}
            w="16px"
            h="16px"
            bgColor={color}
            border={color === '#fff' ? '1px solid #ccc' : 'none'}
            rounded="full"
          ></Box>
        ))}
      </HStack>
      <Text color="cyan.800">{author}</Text>
    </Flex>
  );
};

const TechBar = props => {
  const { design } = props;
  // const colors = color?.split('_');

  return (
    <Flex w="100%" justify="space-between" pb="10px">
      {/* <HStack>
        {colors.map((color, index) => (
          <Box
            key={index + color}
            w="16px"
            h="16px"
            bgColor={color}
            border={color === '#fff' ? '1px solid #ccc' : 'none'}
            rounded="full"
          ></Box>
        ))}
      </HStack> */}
      <Text color="grey.550">{design}</Text>
    </Flex>
  );
};

const WebCard = props => {
  const { image, title, link } = props;
  const { isShowDetail, isShowTech } = useContext(WebContext);

  return (
    <Flex w="100%" direction="column">
      <Link href={link} isExternal>
        <AspectRatio w="100%" ratio={14 / 9}>
          <Image
            fallback={<Skeleton />}
            rounded="md"
            src={image + '.jpg'}
            alt={title}
            objectFit="cover"
          />
        </AspectRatio>
        <Text
          color="grey.700"
          pt="10px"
          pb={isShowDetail ? '2px' : '10px'}
          letterSpacing="0.025em"
        >
          {title}
        </Text>
      </Link>
      {isShowDetail && <DetailBar {...props} />}
      {isShowTech && <TechBar {...props} />}
    </Flex>
  );
};

export default WebCard;
