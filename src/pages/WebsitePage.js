import { useEffect, useState } from 'react';

import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import Filter from 'components/Filter';
import WebsiteList from 'components/WebsiteList';

import { useResourceService } from 'service';

const Panel = ({ industry, handleClick }) => {
  return (
    <Menu>
      <MenuButton w="250px" as={Button} rightIcon={<ChevronDownIcon />}>
        Actions {industry}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleClick(null)}>all</MenuItem>
        <MenuItem onClick={() => handleClick('design/art')}>
          design/art
        </MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export function WebsitePage() {
  const [data, setData] = useState(null); //data
  const [industry, setIndustry] = useState(null); //data
  const { getWebsiteResource, getWebsiteResourceFilter } = useResourceService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWebsiteResource();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (industry) {
        const data = await getWebsiteResourceFilter(industry);
        setData(data);
      } else {
        const data = await getWebsiteResource();
        setData(data);
      }
    };
    fetchData();
  }, [industry]);

  const handleClickMenu = item => {
    setIndustry(item);
  };

  return (
    <Flex w="100%" direction="column">
      <Filter industry={industry} handleClickMenu={handleClickMenu} />
      {/* <Panel industry={industry} handleClick={handleClickMenu} /> */}
      {data && <WebsiteList data={data} />}
    </Flex>
  );
}
