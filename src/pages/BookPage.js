import { useEffect, useState } from 'react';
import { Flex, Text, SimpleGrid, VStack } from '@chakra-ui/react';

import { Container } from 'components/layouts';
import BookSkeleton from 'components/skeleton/BookSkeleton';

import { useResourceService } from 'service';
import useImageBuilder from 'hooks/useImageBuilder';

import BookCard from 'components/BookCard';

export function BookPage() {
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [dataUX, setDataUX] = useState([]);
  const [dataGrowth, setDataGrowth] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const { getBook } = useResourceService();
  const type = 'book';
  const content = `name,link,description,recommend,tag[]->{name},authors[]->{name,link,image},image{
        asset->{
          _id,
          url
        },
      }`;
  // const method = `*[_type == "${type}"] | order(_updatedAt desc){
  //     ${content}
  //   }
  //   `;
  // const getUXbookMethod = `*[_type == "${type}" && "使用者體驗" in tag[] -> name] | order(_updatedAt desc){
  //     ${content}
  //   }
  //   `;

  const filterMethod = tag => {
    return `*[_type == "${type}" && "${tag}" in tag[] -> name] | order(_updatedAt desc){
      ${content}
    }
    `;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const dataUX = await getBook(filterMethod('使用者體驗'));
      const dataGrowth = await getBook(filterMethod('個人成長'));
      const dataProduct = await getBook(filterMethod('產品設計'));
      // setData(data);
      setDataUX(dataUX);
      setDataGrowth(dataGrowth);
      setDataProduct(dataProduct);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container pt="12px" pb={{ base: '20px', lg: '32px' }}>
      <VStack w="100%" align="flex-start" pt={{ base: '24px', lg: '36px' }}>
        <Text
          fontWeight="bold"
          color="gray.600"
          letterSpacing=".05em"
          fontSize={{ base: '18px', lg: '20px' }}
        >
          使用者體驗🤷‍♂️
        </Text>
        {isLoading && <BookSkeleton amount={3} />}
        <SimpleGrid w="100%" columns={{ base: 1, lg: 3 }} spacing="32px">
          {dataUX.map(item => (
            <BookCard key={item.name} {...item} />
          ))}
        </SimpleGrid>
      </VStack>
      <VStack w="100%" align="flex-start" pt={{ base: '24px', lg: '36px' }}>
        <Text
          fontWeight="bold"
          color="gray.600"
          letterSpacing=".05em"
          fontSize={{ base: '18px', lg: '20px' }}
        >
          個人成長🧩
        </Text>
        {isLoading && <BookSkeleton amount={3} />}
        <SimpleGrid w="100%" columns={{ base: 1, lg: 3 }} spacing="32px">
          {dataGrowth.map(item => (
            <BookCard key={item.name} {...item} />
          ))}
        </SimpleGrid>
      </VStack>
      <VStack w="100%" align="flex-start" pt={{ base: '24px', lg: '36px' }}>
        <Text
          fontWeight="bold"
          color="gray.600"
          letterSpacing=".05em"
          fontSize={{ base: '18px', lg: '20px' }}
        >
          產品設計☄
        </Text>
        {isLoading && <BookSkeleton amount={3} />}
        <SimpleGrid w="100%" columns={{ base: 1, lg: 3 }} spacing="32px">
          {dataProduct.map(item => (
            <BookCard key={item.name} {...item} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
