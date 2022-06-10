import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Flex, Image, HStack } from '@chakra-ui/react';
import webInspirationIcon from 'assets/web_inspiration_icon.svg';
import designResourceIcon from 'assets/design_resource_icon.svg';
import webInspirationSm from 'assets/web_inspiration_sm.svg';
import designResourceSm from 'assets/design_resource_sm.svg';
import logo from 'assets/logo.png';

import { motion, useViewportScroll } from 'framer-motion';
import MenuDrawer from './MenuDrawer';

const MotionImage = motion(Image);

const Menu = () => {
  const { scrollYProgress } = useViewportScroll();
  const [degree, setDegree] = useState(0);
  const location = useLocation();
  const matchResource = location.pathname.split('/')[1] === 'resource';
  const isMatchResource = matchResource;

  useEffect(() => {
    scrollYProgress.onChange(v => setDegree(v * 360));
  }, [scrollYProgress, degree]);

  return (
    <Flex
      zIndex="1"
      top="0"
      position="sticky"
      w="100%"
      h="68px"
      bg="grey.100"
      justify="space-between"
      align="center"
      borderBottom="1px solid #ccc"
      px={{ base: '15px', lg: '100px' }}
    >
      <Flex w="50px">
        <MotionImage
          src={logo}
          alt="web inspiration"
          style={{ rotate: degree }}
          transition={{ type: 'tween' }}
        />
      </Flex>
      <HStack spacing="20px">
        <RouterLink to="/">
          <Image
            display={{ base: 'block', lg: 'none' }}
            h={location.pathname === '/' ? '27px' : '20px'}
            src={webInspirationSm}
            alt="Web Inspiration"
            opacity={location.pathname === '/' ? 1 : 0.2}
            transition="all .5s"
            _hover={{ opacity: 0.5 }}
          />
          <Image
            display={{ base: 'none', lg: 'block' }}
            h={location.pathname === '/' ? '27px' : '20px'}
            src={webInspirationIcon}
            alt="Web Inspiration"
            opacity={location.pathname === '/' ? 1 : 0.2}
            transition="all .5s"
            _hover={{ opacity: 0.5 }}
          />
        </RouterLink>
        <RouterLink to="/resource">
          <Image
            display={{ base: 'block', lg: 'none' }}
            h={isMatchResource ? '27px' : '20px'}
            opacity={isMatchResource ? 1 : 0.2}
            _hover={{ opacity: 0.5 }}
            src={designResourceSm}
            alt="design ResourceIcon"
            transition="all .5s"
          />
          <Image
            display={{ base: 'none', lg: 'block' }}
            h={isMatchResource ? '27px' : '20px'}
            opacity={isMatchResource ? 1 : 0.2}
            _hover={{ opacity: 0.5 }}
            src={designResourceIcon}
            alt="design ResourceIcon"
            transition="all .5s"
          />
        </RouterLink>
      </HStack>
      <MenuDrawer />
    </Flex>
  );
};

export default Menu;
