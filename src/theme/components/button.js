const Button = {
  baseStyle: {
    display: 'flex',
    fontWeight: '400',
    letterSpacing: '1.5',
    rounded: 'full',
    fontSize: '16px',
    _focus: {
      ring: '0px',
    },
  },
  sizes: {
    md: {
      px: '24px',
      py: '10px',
      fontSize: '16px',
    },
    sm: {
      px: '14px',
      py: '6px',
      fonSize: '14px',
    },
    fixedWidth: {
      w: '200px',
      fonSize: '16px',
      py: '10px',
    },
  },
  variants: {
    primary: {
      bgColor: 'btn-primary-bg',
      color: 'fg-default',
      _hover: {
        bgColor: 'btn-primary-hover-bg',
      },
      _active: {
        bgColor: 'btn-primary-active-bg',
      },
    },
    rounded: {
      rounded: 'full',
    },
    outline: {
      borderColor: 'blue.500',
      borderWidth: '1px',
    },
    secondary: {
      bgColor: 'gray.900',
      color: 'white',
    },
    fixedWidth: {
      width: '152px',
      py: '10px',
    },
    defaultProps: {
      // variants: 'rounded',
      size: 'md',
      colorScheme: 'blue',
    },
  },
};

export default Button;
