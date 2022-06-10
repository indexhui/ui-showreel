import React from 'react';
import { ChakraProvider, Flex, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Router from 'routes';
import theme from 'theme/theme';
import Menu from 'components/Menu';
import WebProvider from 'store/WebProvider';
import raise from 'assets/raise.svg';

const MotionImage = motion(Image);

function App() {
  return (
    <WebProvider>
      <ChakraProvider theme={theme}>
        <Menu />
        <Router />
        <Flex w="100%" justify="center" pb="50px" overflow="hidden">
          <Link href="https://forms.gle/W9yVzBkGG3ADrTiG6" isExternal>
            <MotionImage
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              w="220px"
              src={raise}
              alt="raise"
            />
          </Link>
        </Flex>
      </ChakraProvider>
    </WebProvider>
  );
}

export default App;
