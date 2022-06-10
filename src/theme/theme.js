import { extendTheme } from '@chakra-ui/react';
import colors from 'theme/colors';
// import Button from './components/button';

const customTheme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: "'Montserrat', Sans-serif",
    body: "'Montserrat', Sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: '#F9F9F9',
      },
    },
  },
  colors,
  // colors: {
  //   ...colors,
  //   brand: {
  //     500: '#3DB9FF',
  //     600: '#186DD1',
  //     700: '#0A2C54',
  //   },
  //   grass: '#61CE70',
  // },
  components: {
    // Button,
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
          color: 'grey.500',
        },
        // _active: {
        //   outline: '0px',
        // },
        _focus: {
          outline: '0px',
          boxShadow: 'unset',
        },
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
