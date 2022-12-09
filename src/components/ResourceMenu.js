import { useEffect } from 'react';
import {
  Flex,
  Text,
  HStack,
  VStack,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import {
  Link as RouterLink,
  useMatch,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const ResourceMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  const matchResource = useMatch('/resource');
  useEffect(() => {
    if (matchResource) {
      navigate('/resource/ig-collection', { replace: true });
    }
  }, [matchResource, navigate]);

  return (
    <Flex
      display={{ base: 'none', lg: 'flex' }}
      zIndex="2"
      bgColor="grey.100"
      top="68px"
      position="sticky"
      borderBottom="1px solid #cccc"
      w="100%"
      h={{ base: 'auto', lg: '55px' }}
      px="100px"
      justify="center"
      py="10px"
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        divider={<StackDivider borderColor="gray.200" />}
        spacing="20px"
      >
        <VStack align="flex-start" justify="center" spacing="0">
          <Text fontSize="12px" color="#9f9f9f">
            Web
          </Text>
          <HStack spacing="15px">
            <RouterLink to="/resource/web-collection">
              <Text
                fontSize="14px"
                color={
                  path === '/resource/web-collection' ? 'cyan.700' : 'grey.500'
                }
              >
                網頁設計靈感
              </Text>
            </RouterLink>
            <RouterLink to="/resource/web-tool">
              <Text
                fontSize="14px"
                color={path === '/resource/web-tool' ? 'cyan.700' : 'grey.500'}
              >
                前端工具
              </Text>
            </RouterLink>
          </HStack>
        </VStack>
        <VStack align="flex-start" justify="center" spacing="0">
          <Text fontSize="12px" color="#9f9f9f">
            UI
          </Text>
          <HStack spacing="15px">
            <RouterLink to="/resource/app-collection">
              <Text
                fontSize="14px"
                color={
                  path === '/resource/app-collection' ? 'cyan.700' : 'grey.500'
                }
              >
                APP 靈感收集
              </Text>
            </RouterLink>
            <RouterLink to="/resource/portfolio">
              <Text
                fontSize="14px"
                color={path === '/resource/portfolio' ? 'cyan.700' : 'grey.500'}
              >
                Portfolio
              </Text>
            </RouterLink>
          </HStack>
        </VStack>
        <VStack align="flex-start" justify="center" spacing="0">
          <Text fontSize="12px" color="#9f9f9f">
            設計靈感
          </Text>
          <HStack spacing="15px">
            <RouterLink to="/resource/ig-collection">
              <Text
                fontSize="14px"
                color={
                  path === '/resource/ig-collection' ? 'cyan.700' : 'grey.500'
                }
              >
                IG 帳戶
              </Text>
            </RouterLink>
            <RouterLink to="/resource/press-collection">
              <Text
                fontSize="14px"
                color={
                  path === '/resource/press-collection'
                    ? 'cyan.700'
                    : 'grey.500'
                }
              >
                文章出品
              </Text>
            </RouterLink>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default ResourceMenu;
