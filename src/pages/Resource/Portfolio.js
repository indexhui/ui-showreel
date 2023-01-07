import { useEffect, useState } from 'react';
import { Flex, Text, SimpleGrid, VStack } from '@chakra-ui/react';

import CreatorSkeleton from 'components/skeleton/CreatorSkeleton';
import TagLevelFilter from 'components/TagLevelFilter';
import Card from 'components/Card';

import { useResourceService } from 'service';

export default function Uiux() {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [tag, setTag] = useState();
  const { getResource } = useResourceService();

  const TAG_LIST = ['UI', 'UX', 'Product', '視覺'];

  const type = 'portfolio';

  //要取出那些資料
  const content = `name,link,intro,tag[]->{name},image{
        asset->{ _id, url},
      }`;

  const filterMethod = tag => {
    const tagQuery = tag ? ` && "${tag}" in tag[] -> name` : '';

    return `*[_type == "${type}" ${tagQuery} && !("Collection" match  tag[] -> name) ]| order(_updatedAt desc){
      ${content}
    }
    `;
  };

  const CollectionMethod = () => {
    return `*[_type == "${type}" && "Collection" in  tag[] -> name ]| order(_updatedAt desc){
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
      const collectionData = await getResource(CollectionMethod());
      setData(data);
      setCollection(collectionData);
      setIsLoading(false);
    };
    fetchData();
  }, [tag]);

  return (
    <>
      <Flex
        direction="column"
        w="100%"
        py={{ base: '20px', lg: '40px' }}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Text textStyle="heading2">合集</Text>
        <Text textStyle="text2">收錄著海內外優修 Portfolio 的資源平台</Text>
        <SimpleGrid
          pt="20px"
          w="100%"
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing="32px"
        >
          {collection?.map(item => (
            <Card key={item.name} {...item} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex w="100%" pt={{ base: '20px', lg: '40px' }} direction="column">
        <Text textStyle="heading2" pb="5px">
          Navigate 推薦
        </Text>
        <TagLevelFilter
          tag={tag}
          handleClickTagMenu={handleClickTagMenu}
          tagList={TAG_LIST}
        />
      </Flex>
      {isLoading && <CreatorSkeleton />}
      <SimpleGrid
        pt="20px"
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
