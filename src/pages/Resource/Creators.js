import { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Text } from '@chakra-ui/react';

import CreatorSkeleton from 'components/skeleton/CreatorSkeleton';
import TagLevelFilter from 'components/TagLevelFilter';
import CreatorCard from 'components/CreatorCard';

import { useResourceService } from 'service';

export default function Creators() {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);
  const [tag, setTag] = useState();
  const [level, setLevel] = useState();
  const { getResource } = useResourceService();

  const TAG_LIST = [
    'UIUX',
    '產品設計',
    '使用者體驗',
    'Figma',
    '視覺設計',
    '個人成長',
  ];

  const LEVEL_LIST = ['入門', '中階', '高階'];

  const type = 'creator';

  //要取出那些資料
  const content = `name,link,intro,tag[]->{name},level[]->{nameCN},cover{
        asset->{ _id, url},
      },avatar{
        asset->{ _id, url},
      }`;

  const filterMethod = (tag, level) => {
    const tagQuery = tag ? ` && "${tag}" in tag[] -> name` : '';
    const levelQuery = level ? ` && "${level}" in level[] -> nameCN` : '';

    return `*[_type == "${type}" ${levelQuery} ${tagQuery}]| order(_updatedAt desc){
      ${content}
    }
    `;
  };

  const handleClickTagMenu = item => {
    setTag(item);
  };
  const handleClickLevelMenu = item => {
    setLevel(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getResource(filterMethod(tag, level));
      setData(data);

      setIsLoading(false);
    };
    fetchData();
  }, [tag, level]);

  return (
    <>
      <Flex
        rounded="lg"
        bg="white"
        w="100%"
        p={{ base: '15px', lg: '20px' }}
        my="10px"
        direction="column"
      >
        <Text textStyle="text2" color="gray.600">
          許多優秀的設計師在 IG等平台，整理出自己的經驗心法與設計技巧。
        </Text>
        <Text textStyle="text2" color="gray.600">
          蠻多時候 UIUX
          的知識點是零碎的，搭配自己的學習節奏，這些創作者的學習旅程會是您自學的好夥伴。
        </Text>
      </Flex>
      <Flex w="100%" py="12px">
        <TagLevelFilter
          tag={tag}
          level={level}
          handleClickTagMenu={handleClickTagMenu}
          handleClickLevelMenu={handleClickLevelMenu}
          tagList={TAG_LIST}
          levelList={LEVEL_LIST}
        />
      </Flex>
      {isLoading && <CreatorSkeleton />}
      <SimpleGrid
        w="100%"
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing="32px"
      >
        {data?.map(item => (
          <CreatorCard key={item.name} {...item} />
        ))}
      </SimpleGrid>
    </>
  );
}
