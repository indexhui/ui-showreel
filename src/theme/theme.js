import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
  theme as base,
} from '@chakra-ui/react';
import colors from 'theme/colors';
import textStyles from 'theme/textStyles';
import semanticTokens from 'theme/semanticTokens';
import Button from './components/button';
import Modal from './components/modal';
import Link from './components/link';

const customTheme = {
  colors,
  textStyles,
  semanticTokens,
  styles: {
    global: {
      body: {
        background: 'bg-default',
      },
    },
  },
  fonts: {
    heading: `'Montserrat','Noto Sans TC','PingFang TC','Microsoft JhengHei',${base.fonts?.body}`,
    body: `'Montserrat','Noto Sans TC','PingFang TC','Microsoft JhengHei',${base.fonts?.body}`,
  },
  components: {
    Button,
    Modal,
    Link,
  },
};

const theme = extendTheme(
  customTheme,
  withDefaultColorScheme({
    colorScheme: 'blue',
    components: ['Button'],
  }),
  withDefaultColorScheme({
    colorScheme: 'red',
    components: ['Slider'],
  }),
  withDefaultColorScheme({
    colorScheme: 'orange',
    components: ['Switch', 'Code'],
  }),
  withDefaultVariant({
    variant: 'outline',
    components: ['Input', 'NumberInput'],
  }),
  withDefaultVariant({
    variant: 'outline',
    components: ['filled'],
  })
);

export default theme;
