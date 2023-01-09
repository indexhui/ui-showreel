import { useContext } from 'react';
import {
  Flex,
  HStack,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import WebContext from 'store/WebContext';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Panel = ({ industry, handleClickMenu }) => {
  return (
    <Menu>
      <MenuButton
        bgColor="gray.200"
        _hover={{
          bgColor: 'gray.300',
        }}
        _active={{
          bgColor: 'gray.300',
        }}
        w="unset"
        color="gray.800"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {industry ? industry : '全部'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleClickMenu(null)}>全部</MenuItem>
        <MenuItem onClick={() => handleClickMenu('設計/藝術')}>
          設計/藝術
        </MenuItem>
        <MenuItem onClick={() => handleClickMenu('建築')}>建築</MenuItem>
        <MenuItem onClick={() => handleClickMenu('企業網站')}>
          企業網站
        </MenuItem>
        <MenuItem onClick={() => handleClickMenu('餐飲/食物')}>
          餐飲/食物
        </MenuItem>
        <MenuItem onClick={() => handleClickMenu('旅行')}>旅行</MenuItem>
        <MenuItem onClick={() => handleClickMenu('學校/教育')}>
          學校/教育
        </MenuItem>
        {/* <MenuItem onClick={() => handleClickMenu('運動')}>運動</MenuItem> */}
        <MenuItem onClick={() => handleClickMenu('NFT')}>NFT</MenuItem>
        <MenuItem onClick={() => handleClickMenu('電影')}>電影</MenuItem>
        <MenuItem onClick={() => handleClickMenu('音樂')}>音樂</MenuItem>
        <MenuItem onClick={() => handleClickMenu('運輸/交通')}>
          運輸/交通
        </MenuItem>
        <MenuItem onClick={() => handleClickMenu('醫療/健康')}>
          醫療/健康
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const Filter = ({ industry, handleClickMenu }) => {
  const webCtx = useContext(WebContext);
  const { isShowDetail, isShowTech, toggleDetail, toggleTech } = webCtx;

  const handleToggleDetail = () => {
    toggleDetail();
  };

  // const handleToggleTech = () => {
  //   toggleTech();
  // };

  return (
    <>
      <Flex
        zIndex="1"
        bgColor="gray.100"
        top="0px"
        position="sticky"
        borderBottom="1px solid #cccc"
        w="100%"
        h="55px"
        px="10px"
        justify="center"
      >
        <Flex justify="center" align="center" flex="1">
          <HStack spacing={{ base: '12px', lg: '24px' }}>
            <HStack>
              <Text>產業分類 : </Text>
              <Panel industry={industry} handleClickMenu={handleClickMenu} />
            </HStack>
            <FormControl display="flex" w="auto" pr="20px" alignItems="center">
              <FormLabel htmlFor="detail" mb="0" color="#7B7B7B">
                Detail
              </FormLabel>
              <Switch
                onChange={handleToggleDetail}
                id="detail"
                isChecked={isShowDetail}
              />
            </FormControl>
            {/* <FormControl display="flex" w="auto" pr="20px" alignItems="center">
              <FormLabel htmlFor="detail" mb="0" color="#7B7B7B">
                Show Tech / Design
              </FormLabel>
              <Switch
                onChange={handleToggleTech}
                id="detail"
                isChecked={isShowTech}
              />
            </FormControl> */}
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Filter;
