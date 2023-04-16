const tokens = {
  colors: {
    light: {
      'bg-default': 'gray.100',
      'fg-default': 'white',
      'btn-primary-bg': 'blue.500',
      'btn-primary-hover-bg': 'blue.600',
      'btn-primary-active-bg': 'blue.700',
      'modal-primary-body': 'gray.100',
      'modal-primary-header': 'white',
      'modal-primary-footer': 'gray.500',
    },
    dark: {
      'bg-default': 'gray.900',
      'fg-default': 'black',
      'btn-primary-bg': 'blue.400',
      'btn-primary-hover-bg': 'blue.500',
      'btn-primary-active-bg': 'blue.600',
      'modal-primary-body': 'gray.700',
      'modal-primary-header': 'gray.900',
      'modal-primary-footer': 'gray.500',
    },
  },
};

const semanticTokens = {
  colors: {
    'bg-default': {
      default: tokens.colors.light['bg-default'],
      _dark: tokens.colors.dark['bg-default'],
    },
    'btn-primary-bg': {
      default: tokens.colors.light['btn-primary-bg'],
      _dark: tokens.colors.dark['btn-primary-bg'],
    },
    'btn-primary-hover-bg': {
      default: tokens.colors.light['btn-primary-hover-bg'],
      _dark: tokens.colors.dark['btn-primary-hover-bg'],
    },
    'btn-primary-active-bg': {
      default: tokens.colors.light['btn-primary-active-bg'],
      _dark: tokens.colors.dark['btn-primary-active-bg'],
    },
    'fg-default': {
      default: tokens.colors.light['fg-default'],
      _dark: tokens.colors.dark['fg-default'],
    },
    'modal-primary-body': {
      default: tokens.colors.light['modal-primary-body'],
      _dark: tokens.colors.dark['modal-primary-body'],
    },
    'modal-primary-header': {
      default: tokens.colors.light['modal-primary-header'],
      _dark: tokens.colors.dark['modal-primary-header'],
    },
    'modal-primary-footer': {
      default: tokens.colors.light['modal-primary-footer'],
      _dark: tokens.colors.dark['modal-primary-footer'],
    },
  },
};

export default semanticTokens;
