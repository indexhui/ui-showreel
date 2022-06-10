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
} from '@chakra-ui/react';

import menu from 'assets/menu.svg';

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        cursor="pointer"
        onClick={onOpen}
        w={{ base: '40px', lg: '50px' }}
        src={menu}
        alt="menu"
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>UI Showreel</DrawerHeader>

          <DrawerBody>
            <VStack spacing="20px" align="flex-start">
              <RouterLink onClick={onClose} to="/">
                Web Inspiration
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/web-collection">
                網頁設計靈感
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/web-tool">
                前端工具
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/portfolio">
                Portfolio
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/app-collection">
                APP 靈感收集
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/ig-collection">
                IG 帳戶
              </RouterLink>
              <RouterLink onClick={onClose} to="/resource/press-collection">
                文章出品
              </RouterLink>
              <Divider />
              <Link
                onClick={onClose}
                href="https://forms.gle/W9yVzBkGG3ADrTiG6"
                isExternal
              >
                投稿募集
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MenuDrawer;
