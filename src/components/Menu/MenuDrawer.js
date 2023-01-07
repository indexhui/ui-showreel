import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Link,
  VStack,
  Divider,
  HStack,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';

import { FaInstagram } from 'react-icons/fa';
import menu from 'assets/menu.svg';

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        onClick={onOpen}
        border="1px solid"
        borderColor="blue.500"
        px="10px"
        rounded="md"
      >
        <Image
          cursor="pointer"
          onClick={onOpen}
          w={{ base: '28px', lg: '30px' }}
          src={menu}
          alt="menu"
        />
        <Text color="blue.500">menu</Text>
      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="blue.500">UX NAVIGATE</DrawerHeader>

          <DrawerBody>
            <VStack spacing="20px" align="flex-start">
              <RouterLink onClick={onClose} to="/website">
                中文網站靈感收集
              </RouterLink>
              <Divider borderColor="gray.400" />
              <RouterLink onClick={onClose} to="/resource/books">
                書單推薦
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/creators">
                社群創作者
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/portfolio">
                Portfolio
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/UIUX">
                UIUX
              </RouterLink>
              <Divider borderColor="gray.400" />
              <Link
                onClick={onClose}
                href="https://forms.gle/W9yVzBkGG3ADrTiG6"
                isExternal
              >
                投稿募集
              </Link>
              <Link
                onClick={onClose}
                href="https://forms.gle/W9yVzBkGG3ADrTiG6"
                isExternal
              >
                我想許願
              </Link>
              <Link
                onClick={onClose}
                href="https://www.instagram.com/uxnavigate"
                isExternal
              >
                <HStack>
                  <Icon as={FaInstagram} />
                  <Text>uxnavigate</Text>
                </HStack>
                <Text color="gray.500">追蹤我們的 IG，取得最新消息!</Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MenuDrawer;
