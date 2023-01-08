import { useEffect, useState } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';

import CreatorSkeleton from 'components/skeleton/CreatorSkeleton';
import OrganizeFilter from 'components/OrganizeFilter';
import CreatorCard from 'components/CreatorCard';
import Card from 'components/Card';
import { useResourceService } from 'service';

export default function Organize() {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);
  const [tag, setTag] = useState();
  const [level, setLevel] = useState();
  const { getResource } = useResourceService();

  const TAG_LIST = ['課程', 'Youtube', 'Medium', '文章', '電子信', 'Podcast'];

  const LEVEL_LIST = ['入門', '中階', '高階'];

  const type = 'organize';

  //要取出那些資料
  const content = `name,link,intro,tag[]->{name},level[]->{nameCN},image{
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
      console.log(data);

      setIsLoading(false);
    };
    fetchData();
  }, [tag, level]);

  return (
    <>
      <Flex w="100%" py="12px">
        <OrganizeFilter
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
          <Card key={item.name} {...item} />
        ))}
      </SimpleGrid>
    </>
  );
}
