import { useEffect, useState } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';

import { Container } from 'components/layouts';

import { useResourceService } from 'service';
import useImageBuilder from 'hooks/useImageBuilder';

import BookCard from 'components/BookCard';

export function BookPage() {
  const [data, setData] = useState([]);
  const { getBook } = useResourceService();
  const type = 'book';
  const content = `name,link,description,recommend,tag[]->{name},authors[]->{name,link,image},image{
        asset->{
          _id,
          url
        },
      }`;
  const method = `*[_type == "${type}"] | order(_createdAt desc){
      ${content}
    }
    `;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBook(method);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <SimpleGrid
        w="100%"
        columns={{ base: 1, lg: 3 }}
        spacing="32px"
        pt="12px"
      >
        {data.map(item => (
          <BookCard key={item.name} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
