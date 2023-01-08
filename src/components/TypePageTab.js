import { NavLink } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';
import { motion, LayoutGroup } from 'framer-motion';

const MotionFlex = motion(Flex);

const TypeList = [
  {
    name: '書單推薦',
    route: 'books',
  },
  {
    name: '社群創作者',
    route: 'creators',
  },
  {
    name: '組織',
    route: 'organization',
  },
  {
    name: 'UIUX',
    route: 'UIUX',
  },
  {
    name: 'Portfolio',
    route: 'portfolio',
  },
];

const Tab = props => {
  const { name, onClick, route } = props;
  return (
    <MotionFlex
      as={NavLink}
      to={route}
      mx="10px"
      h="100%"
      direction="column"
      onClick={onClick}
      cursor="pointer"
      position="relative"
      justify="center"
    >
      {({ isActive }) => (
        <>
          <Text
            fontSize={{ base: '12px', md: '16px' }}
            px="5px"
            color={isActive ? 'gray.800' : 'gray.500'}
          >
            {name}
          </Text>
          {isActive && (
            <MotionFlex
              position="absolute"
              bottom="0"
              w="100%"
              h="1.5px"
              bgColor="gray.800"
              className="underline"
              layoutId="underline"
              rounded="full"
            />
          )}
        </>
      )}
    </MotionFlex>
  );
};

const TypePageTab = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      h="40px"
      bgColor="white"
      mt="1.5px"
    >
      <LayoutGroup>
        {TypeList.map((item, i) => (
          <Tab {...item} key={i} />
        ))}
      </LayoutGroup>
    </Flex>
  );
};

export default TypePageTab;
