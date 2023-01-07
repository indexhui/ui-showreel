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
import WebpageSkeleton from 'components/skeleton/WebpageSkeleton';

import { useResourceService } from 'service';

export function WebsitePage() {
  const [data, setData] = useState(null); //data
  const [industry, setIndustry] = useState(null); //data
  const { getWebsiteResource, getWebsiteResourceFilter } = useResourceService();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getWebsiteResource();
      setData(data);
      setIsLoading(false);
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
      {isLoading && <WebpageSkeleton />}
      {/* <Panel industry={industry} handleClick={handleClickMenu} /> */}
      {data && <WebsiteList data={data} />}
    </Flex>
  );
}
