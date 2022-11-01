import { mode } from '@chakra-ui/theme-tools';

const Modal = {
  //元件的哪一部分
  // The base styles for each part
  baseStyle: {},
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {
    main: {
      header: {
        bgColor: 'modal-primary-header',
        fontWeight: '400',
      },
      body: {
        bgColor: 'modal-primary-body',
        alignItems: 'center',
        pb: '80px',
      },
      footer: {
        bgColor: 'modal-primary-footer',
        position: 'absolute',
        w: '100%',
        bottom: '0',
        backdropFilter: 'blur(5px)',
      },
    },
    accent: {
      header: {
        bgColor: 'blue.600',
        color: 'fg-default',
        fontWeight: '400',
      },
      body: {
        bgColor: 'blue.600',
        color: 'white',
        alignItems: 'center',
        pb: '80px',
      },
      footer: {
        bgColor: '#11587750',
        color: 'white',
        position: 'absolute',
        w: '100%',
        bottom: '0',
        backdropFilter: 'blur(5px)',
      },
      closeButton: {
        color: 'white',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    isCentered: true,
    // variant: 'main',
    size: 'md',
  },
};

export default Modal;
