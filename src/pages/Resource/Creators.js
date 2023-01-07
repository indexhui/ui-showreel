import { useEffect, useState } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';

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
