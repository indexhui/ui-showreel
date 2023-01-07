import { useEffect, useState } from 'react';
import { Flex, Text, SimpleGrid, VStack } from '@chakra-ui/react';

import CreatorSkeleton from 'components/skeleton/CreatorSkeleton';
import TagLevelFilter from 'components/TagLevelFilter';
import CreatorCard from 'components/CreatorCard';
import Card from 'components/Card';

import { useResourceService } from 'service';

export default function Uiux() {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);
  const [tag, setTag] = useState();
  const { getResource } = useResourceService();

  const TAG_LIST = ['App', 'Web', 'Tool'];

  const type = 'uiux';

  //要取出那些資料
  const content = `name,link,intro,tag[]->{name},image{
        asset->{ _id, url},
      }`;

  const filterMethod = tag => {
    const tagQuery = tag ? ` && "${tag}" in tag[] -> name` : '';

    return `*[_type == "${type}" ${tagQuery}]| order(_updatedAt desc){
      ${content}
    }
    `;
  };

  const handleClickTagMenu = item => {
    setTag(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getResource(filterMethod(tag));
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [tag]);

  return (
    <>
      <Flex w="100%" py="12px">
        <TagLevelFilter
          tag={tag}
          handleClickTagMenu={handleClickTagMenu}
          tagList={TAG_LIST}
        />
      </Flex>
      {isLoading && <CreatorSkeleton />}
      <SimpleGrid
        w="100%"
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing="32px"
      >
        {data?.map(item => (
          <Card key={item.name} {...item} />
        ))}
      </SimpleGrid>
    </>
  );
}
