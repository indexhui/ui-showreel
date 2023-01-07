import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Flex, Image, HStack, Text } from '@chakra-ui/react';

import logo from 'assets/logo.svg';
import useScrollDirection from 'hooks/useScrollDirection';

import { motion, useViewportScroll } from 'framer-motion';
import MenuDrawer from './MenuDrawer';

const MotionImage = motion(Image);

const Menu = () => {
  const scrollDirection = useScrollDirection();
  // const { scrollYProgress } = useViewportScroll();
  // const [degree, setDegree] = useState(0);
  const location = useLocation();

  const matchResource = location.pathname.split('/')[1] === 'resource';
  const isMatchResource = matchResource;

  // useEffect(() => {
  //   scrollYProgress.onChange(v => setDegree(v * 360));
  // }, [scrollYProgress, degree]);

  return (
    <Flex
      zIndex="10"
      top={scrollDirection === 'down' ? '-65px' : '0px'}
      position="sticky"
      w="100%"
      h="65px"
      bg="grey.100"
      justify="space-between"
      align="center"
      px={{ base: '15px', lg: '100px' }}
      bgColor="white"
      transitionDuration="350ms"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Flex
        justify="center"
        position="absolute"
        w="500px"
        margin="0 auto"
        left="0"
        right="0"
      >
        <HStack display={{ base: 'none', lg: 'flex' }} spacing="20px">
          <RouterLink
            h={location.pathname === 'website' ? '27px' : '20px'}
            to="/website"
          >
            <Text
              color={location.pathname === '/website' ? 'gray.700' : 'gray.500'}
              fontWeight={location.pathname === '/website' ? '400' : '300'}
            >
              中文網站收集
            </Text>
          </RouterLink>
          <RouterLink to="/resource/books">
            <Text
              color={isMatchResource ? 'gray.700' : 'gray.500'}
              fontWeight={isMatchResource ? '500' : '300'}
            >
              UIUX 學習
            </Text>
          </RouterLink>
        </HStack>
      </Flex>
      <Flex as={RouterLink} to="/" w={{ base: '140px', lg: '170px' }}>
        <Image src={logo} />
      </Flex>

      <MenuDrawer />
    </Flex>
  );
};

export default Menu;
