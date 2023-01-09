import { Flex, Text, HStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { MdWebAsset, MdOutlineArticle } from 'react-icons/md';
// import { BsBookFill, BsBook } from 'react-icons/bs';
// import { FaBookOpen } from 'react-icons/fa';
import { BiBookOpen } from 'react-icons/bi';
import { SiGooglepodcasts } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';

import { Container } from 'components/layouts';

import blueWave from 'assets/blueWave.svg';
import wave from 'assets/wave.svg';

const RESOURCE_TYPE = [
  {
    icon: <Icon w="24px" h="24px" as={MdWebAsset} />,
    name: '網頁靈感',
  },
  {
    icon: <Icon w="22px" h="22px" as={BiBookOpen} />,
    name: '書單推薦',
  },
  {
    icon: <Icon w="20px" h="20px" as={SiGooglepodcasts} />,
    name: 'Podcast',
  },
  {
    icon: <Icon w="22px" h="22px" as={MdOutlineArticle} />,
    name: '文章選讀',
  },
  {
    icon: <Icon w="20px" h="20px" as={FiFigma} />,
    name: 'Figma plugin',
  },
];

const HeroSection = () => {
  return (
    <Flex w="100%" minH="400px" direction="column" mt="20px">
      <Flex h="50px" w="100%" bgImage={blueWave} bgRepeat="repeat-x"></Flex>
      <Flex
        w="100%"
        bgColor="blue.600"
        align="center"
        direction="column"
        py={{ base: '20px', lg: '40px' }}
        px="20px"
      >
        <Text
          textStyle="heading1"
          fontSize={{ base: '24px', lg: '36px' }}
          color="white"
        >
          UIUX 設計資源總匯
        </Text>
        <Text color="white" fontSize={{ base: '20px', lg: '32px' }} py="20px">
          依照領域與程度推薦
          <br />
          尋找適和自己的資源
        </Text>
        <Text
          color="whiteAlpha.800"
          fontSize={{ base: '18px', lg: '20px' }}
          textAlign="center"
        >
          50 件設計資源，由四位設計師推選 單元性收錄
        </Text>
      </Flex>
      <Flex
        h={{ base: '70px', lg: '100px' }}
        w="100%"
        bgImage={wave}
        bgRepeat="repeat-x"
      ></Flex>
      <Container
        display={{ base: 'none', lg: 'flex' }}
        w="100%"
        bgColor="black"
        color="white"
        py={{ base: '12px', lg: '32px' }}
      >
        <SimpleGrid columns={{ base: 2, md: 5 }}>
          {RESOURCE_TYPE.map(item => (
            <HStack key={item.name}>
              {item.icon}
              <Text>{item.name}</Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default HeroSection;
