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

import WebsiteList from 'components/WebsiteList';

const WebsiteSection = ({ data }) => {
  return (
    <>
      <Container bgColor="gray.100" py="40px" align="flex-start">
        <Text textStyle="heading2">書單推薦</Text>
        <Text textStyle="text2">
          你是剛對 UIUX 產生興趣的夥伴嗎? 想從書中學習嗎?從這邊的推薦挑選一本吧
          ~
        </Text>
      </Container>
      <WebsiteList data={data} />
    </>
  );
};

export default WebsiteSection;
