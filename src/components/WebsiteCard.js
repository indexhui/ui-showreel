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
import { motion, AnimatePresence } from 'framer-motion';

import WebContext from 'store/WebContext';
import useImageBuilder from 'hooks/useImageBuilder';

const MotionFlex = motion(Flex);

const DetailBar = props => {
  const { authors, color } = props;

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      w="100%"
      justify="space-between"
      pb="10px"
    >
      <HStack>
        {color &&
          color.map((color, index) => (
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
      {authors &&
        authors.map((author, index) => (
          <Text key={author.name} color="cyan.800">
            {author.name}
          </Text>
        ))}
    </MotionFlex>
  );
};

const TagBar = props => {
  const { tags } = props;
  // const colors = color?.split('_');

  return (
    <Flex w="100%" justify="space-between" pb="10px">
      <HStack>
        {tags.map(item => (
          <Text key={item.name} color="grey.550">
            {item.name}
          </Text>
        ))}
      </HStack>
    </Flex>
  );
};

const WebsiteCard = props => {
  const { image, name, link, tag, colors } = props;
  const { url } = useImageBuilder(image);
  const { isShowDetail, isShowTech } = useContext(WebContext);

  return (
    <MotionFlex w="100%" direction="column">
      <Link href={link} isExternal>
        <AspectRatio w="100%" ratio={14 / 9}>
          <Image
            fallback={<Skeleton />}
            rounded="md"
            src={url}
            alt={name}
            objectFit="cover"
          />
        </AspectRatio>
        <Text
          color="grey.700"
          pt="10px"
          pb={isShowDetail ? '2px' : '10px'}
          letterSpacing="0.025em"
        >
          {name}
        </Text>
      </Link>
      {isShowDetail && <DetailBar {...props} />}
      {isShowTech && <TagBar tags={tag} />}
    </MotionFlex>
  );
};

export default WebsiteCard;
