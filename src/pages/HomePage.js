import { useEffect, useState } from 'react';

import { Flex, Text, VStack, HStack, SimpleGrid, Box } from '@chakra-ui/react';
import { Container } from 'components/layouts';
import HeroSection from 'components/homePage/HeroSection';
import BookSection from 'components/homePage/BookSection';
import WebsiteSection from 'components/homePage/WebsiteSection';
// import WebsiteList from 'components/WebsiteList';

import { useResourceService } from 'service';

const websiteMethod = `*[_type == 'website'] | order(_createdAt desc) [0...4]{
      name,
      link,
      tag[]->{name},
      industry[]->{name},
      authors[]->{name,link},
      color,
      image{
        asset->{
          _id,
          url
        },
      }
    }
    `;

export function HomePage() {
  const [websiteData, setWebsiteData] = useState(null); //data
  const { getResource } = useResourceService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResource(websiteMethod);
      setWebsiteData(data);
    };
    fetchData();
  }, []);

  console.log(websiteData);
  return (
    <>
      <HeroSection />
      <BookSection />
      {websiteData && <WebsiteSection data={websiteData} />}

      {/* <Container>
        <Flex py="40px" w="100%" direction="column">
          <VStack spacing="10px" align="flex-start">
            <Text textStyle="heading2">UIUX 新手指南</Text>
            <Text textStyle="text2">
              你是剛對 UIUX 產生興趣的夥伴嗎?
              可以跟著指引參考自己適合的學習資源與方法!
            </Text>
          </VStack>
          <SimpleGrid columns={2} spacing={10}>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </Flex>
        <Flex py="40px" w="100%" direction="column">
          <VStack spacing="10px" align="flex-start">
            <Text textStyle="heading2">書單推薦</Text>
            <Text textStyle="text2">
              你是剛對 UIUX 產生興趣的夥伴嗎?
              可以跟著指引參考自己適合的學習資源與方法!
            </Text>
          </VStack>
        </Flex>
      </Container> */}
    </>
  );
}
