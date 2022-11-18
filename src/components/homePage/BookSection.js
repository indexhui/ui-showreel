import {
  Flex,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Avatar,
} from '@chakra-ui/react';

import { Container } from 'components/layouts';

import book01 from 'assets/demo/book01.jpg';
import read from 'assets/demo/read.jpg';

const BookCard = () => {
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
        <Image rounded="sm" src={book01} />
        <VStack pl="12px" align="flex-start">
          <Text textStyle="text1">峰值體驗</Text>
          <Text textStyle="text2">
            洞察隱而未知的需求，掌握關鍵時刻影響顧客決策
          </Text>
        </VStack>
      </Flex>
      <HStack py="10px" borderBottom="1px solid" borderColor="gray.300">
        <Flex
          textStyle="text3"
          px="10px"
          bgColor="#E2EDF9"
          color="blue.600"
          rounded="full"
        >
          個人成長
        </Flex>
        <Flex
          textStyle="text3"
          px="10px"
          bgColor="orange.200"
          color="orange.600"
          rounded="full"
        >
          職涯
        </Flex>
      </HStack>
      <VStack align="flex-start" spacing="5px" pt="8px">
        {/* <Text textStyle="text3">誰來推薦這本</Text> */}
        <Text textStyle="text3" color="gray.600">
          《螢幕陷阱》提醒消費者別落入遍佈滿地的認知偏誤坑洞；《峰值體驗》則是從企業視角出發，認為體驗設計就是讓消費者自願又舒適地走入坑洞。
        </Text>
        <Flex w="100%" justify="space-between" align="center">
          <HStack>
            <Avatar w="32px" h="32px" src={read} />
            <Text>read_and_reframe</Text>
          </HStack>
          <Text color="blue.600">看完整書評</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

const BookSection = () => {
  return (
    <Container bgColor="gray.100" py="40px" align="flex-start">
      <Text textStyle="heading2">書單推薦</Text>
      <Text textStyle="text2">
        你是剛對 UIUX 產生興趣的夥伴嗎?
        可以跟著指引參考自己適合的學習資源與方法!
      </Text>
      <SimpleGrid w="100%" columns={3} spacing="32px" pt="12px">
        <BookCard />
        <BookCard />
        <BookCard />
      </SimpleGrid>
    </Container>
  );
};
export default BookSection;
