import { Flex, Text, Image, HStack, Button } from '@chakra-ui/react';
import logo from 'assets/logo_dark.svg';

const Footer = () => {
  return (
    <Flex
      direction="column"
      bgColor="black"
      justify="center"
      align="center"
      px={{ base: '20px', lg: '5%', xl: '100px' }}
      py="32px"
      mt="32px"
    >
      <Image w="280px" src={logo} />
      <HStack py="20px" spacing={{ base: '12px', lg: '20px' }}>
        <Button px="30px" border="1px solid white" bgColor="black">
          我要投稿
        </Button>
      </HStack>
      <Text color="whiteAlpha.600">© 2022 UXNAVIGATE</Text>
    </Flex>
  );
};

export default Footer;
