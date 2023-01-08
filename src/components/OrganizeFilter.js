import {
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const DropMenu = props => {
  const { content, handleClickMenu, list } = props;
  return (
    <Menu>
      <MenuButton
        border="1px solid black"
        bg="unset"
        // bgColor={content ? 'gray.500' : 'gray.200'}
        _hover={{
          bgColor: 'unset',
        }}
        _active={{
          bgColor: 'unset',
        }}
        w="unset"
        color="gray.800"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {content ? content : '全部'}
      </MenuButton>
      <MenuList zIndex="2">
        <MenuItem onClick={() => handleClickMenu()}>全部</MenuItem>
        {list?.map(item => (
          <MenuItem key={item} onClick={() => handleClickMenu(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const OrganizeFilter = props => {
  const {
    tag,
    level,
    handleClickTagMenu,
    handleClickLevelMenu,
    tagList,
    levelList,
  } = props;
  return (
    <Flex>
      <HStack spacing="32px">
        <HStack>
          <Text color="gray.900">管道/形式 : </Text>
          <DropMenu
            content={tag}
            handleClickMenu={handleClickTagMenu}
            list={tagList}
          />
        </HStack>
        {/* {levelList && (
          <HStack>
            <Text color="gray.900">Level : </Text>
            <DropMenu
              content={level}
              handleClickMenu={handleClickLevelMenu}
              list={levelList}
            />
          </HStack>
        )} */}
      </HStack>
    </Flex>
  );
};

export default OrganizeFilter;
