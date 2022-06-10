import React from 'react';
import { ChakraProvider, Text } from '@chakra-ui/react';

import Router from 'routes';
import theme from 'theme/theme';
import Menu from 'components/Menu';
import WebProvider from 'store/WebProvider';

function App() {
  return (
    <WebProvider>
      <ChakraProvider theme={theme}>
        <Menu />
        <Router />
      </ChakraProvider>
    </WebProvider>
  );
}

export default App;
