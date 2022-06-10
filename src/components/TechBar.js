import { Flex, HStack, Text, Switch, Icon } from '@chakra-ui/react';
import { SiWordpress, SiReact, SiVueDotJs, SiGatsby } from 'react-icons/si';

const techList = ['wordpress'];

const TechBar = props => {
  return (
    <HStack>
      {props.wordpress && <Icon as={SiWordpress} size="24px" />}
      {props.react && <Icon as={SiReact} size="24px" />}
      {props.vue && <Icon as={SiVueDotJs} size="24px" />}
      {props.gatsby && <Icon as={SiGatsby} size="24px" />}
      {props.wordpress && <Icon as={SiWordpress} size="24px" />}
    </HStack>
  );
};

export default TechBar;
