import { ModalContent as ChakraModalContent } from '@chakra-ui/react';

export function ModalContent(props) {
  return (
    <ChakraModalContent overflow="hidden" h="400px">
      {props.children}
    </ChakraModalContent>
  );
}
