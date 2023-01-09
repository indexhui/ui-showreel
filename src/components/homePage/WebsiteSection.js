import { Flex, HStack, Text, Grid, GridItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from 'components/layouts';
import WebsiteCard from 'components/WebsiteCard';
import { Link as RouterLink } from 'react-router-dom';
// import WebsiteList from 'components/WebsiteList';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const MotionGridItem = motion(GridItem);
const WebsiteSection = ({ data }) => {
  return (
    <>
      <Container
        bgColor="gray.100"
        pt={{ base: '16px', lg: '24px' }}
        pb={{ base: '16px', lg: '2px' }}
        align="flex-start"
      >
        <Text textStyle="heading2" as={RouterLink} to="/website">
          網站靈感收集
        </Text>
        <Text textStyle="text2" color="gray.700">
          收集中文網站設計案例
        </Text>
        <Flex
          bgColor="gray.100"
          justify="center"
          w="100%"
          // px={{ base: '20px', lg: '5%', xl: '100px' }}
          pt="12px"
          pb="20px"
        >
          <Grid
            // px={{ base: '10px', lg: '10%', xl: '6%' }}
            w="100%"
            templateColumns={{
              base: 'repeat(1,1fr)',
              md: 'repeat(2,1fr)',
              lg: 'repeat(3,1fr)',
              xl: 'repeat(4,1fr)',
            }}
            gap={6}
          >
            <AnimatePresence>
              {data?.map((item, index) => (
                <MotionGridItem
                  key={item.link}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <WebsiteCard {...item} image={item.image} />
                </MotionGridItem>
              ))}
            </AnimatePresence>
          </Grid>
        </Flex>
        <RouterLink to="/website">
          <HStack
            color="gray.600"
            border="1px solid"
            px="20px"
            py="5px"
            borderColor="gray.600"
            rounded="full"
          >
            <Text>探索全部</Text>
            <ArrowForwardIcon />
          </HStack>
        </RouterLink>
      </Container>
    </>
  );
};

export default WebsiteSection;
