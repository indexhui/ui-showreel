import { useContext } from 'react';
import {
  Flex,
  HStack,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Tooltip,
} from '@chakra-ui/react';
import WebContext from 'store/WebContext';

const FilterDrawer = () => {
  return (
    <Flex
      display={{ base: 'none', lg: 'flex' }}
      position="fixed"
      w="101px"
      left="0"
      top="123px"
      h="calc(100vh - 50px)"
      borderRight="1px solid #ccc"
    ></Flex>
  );
};

const Filter = () => {
  const webCtx = useContext(WebContext);
  const { isShowDetail, isShowTech, toggleDetail, toggleTech } = webCtx;

  const handleToggleDetail = () => {
    toggleDetail();
  };

  const handleToggleTech = () => {
    toggleTech();
  };

  return (
    <>
      <FilterDrawer />
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        zIndex="1"
        bgColor="grey.100"
        top="68px"
        position="sticky"
        borderBottom="1px solid #cccc"
        w="100%"
        h="55px"
        px="100px"
        justify="space-between"
      >
        <Flex align="center" flex="1">
          <HStack
            mr="32px"
            h="55px"
            borderLeft="1px solid #ccc"
            borderRight="1px solid #ccc"
            px="20px"
          >
            <Text fontSize="14px">TW</Text>
            <Tooltip label="準備中" aria-label="A tooltip" hasArrow>
              <Text fontSize="14px" color="grey.500">
                WORLD
              </Text>
            </Tooltip>
          </HStack>

          <FormControl display="flex" w="auto" pr="20px" alignItems="center">
            <FormLabel htmlFor="detail" mb="0" color="#7B7B7B">
              Show Detail
            </FormLabel>
            <Switch
              onChange={handleToggleDetail}
              id="detail"
              isChecked={isShowDetail}
            />
          </FormControl>
          <FormControl display="flex" w="auto" pr="20px" alignItems="center">
            <FormLabel htmlFor="detail" mb="0" color="#7B7B7B">
              Show Tech / Design
            </FormLabel>
            <Switch
              onChange={handleToggleTech}
              id="detail"
              isChecked={isShowTech}
            />
          </FormControl>

          {/* <HStack mr="20px">
            <Text color="#7B7B7B" onClick={handleToggleDetail}>
              Show Detail
            </Text>
            <Switch
              isChecked={isShowDetail}
              onClick={handleToggleDetail}
              colorScheme="cyan"
            />
          </HStack> */}
          {/* <HStack>
            <Text color="#7B7B7B">Show Tech / Design</Text>
            <Switch isChecked={isShowTech} colorScheme="cyan" />
          </HStack> */}
        </Flex>

        <HStack px="10px">
          <Tooltip label="準備中" aria-label="A tooltip" hasArrow>
            <Text fontSize="14px" color="grey.500">
              設置/分類
            </Text>
          </Tooltip>
        </HStack>
      </Flex>
    </>
  );
};

export default Filter;
