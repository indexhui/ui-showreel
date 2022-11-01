import { Modal as ChakraModal } from '@chakra-ui/react';

export function Modal(props) {
  return (
    <ChakraModal scrollBehavior="inside" {...props}>
      {props.children}
    </ChakraModal>
  );
}
