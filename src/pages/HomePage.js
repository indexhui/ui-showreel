import { useEffect, useState } from 'react';

import { Flex, Text, VStack, HStack, SimpleGrid, Box } from '@chakra-ui/react';
import { Container } from 'components/layouts';
import HeroSection from 'components/homePage/HeroSection';
import BookSection from 'components/homePage/BookSection';
import WebsiteSection from 'components/homePage/WebsiteSection';
import Footer from 'components/homePage/Footer';
import { useResourceService } from 'service';

const websiteMethod = `*[_type == 'website'] | order(_createdAt desc) [0...8]{
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

  return (
    <>
      <HeroSection />
      <BookSection />
      {websiteData && <WebsiteSection data={websiteData} />}
      <Footer />
    </>
  );
}
