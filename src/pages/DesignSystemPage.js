import { useRef, useEffect } from 'react';

import {
  Flex,
  Text,
  Image,
  HStack,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Code,
  Center,
  Input,
  // Modal,
  VStack,
  AspectRatio,
  ModalOverlay,
  ModalContent as ChakraModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';

import ColorModeSwitcher from 'components/ColorModeSwitcher';
import { ModalContent, Modal } from 'components/Modal';

import house01 from 'assets/demo/house01.jpg';
import house02 from 'assets/demo/house02.jpg';
import house03 from 'assets/demo/house03.jpg';
import house04 from 'assets/demo/house04.jpg';
import cat01 from 'assets/demo/cat01.jpg';
import cat02 from 'assets/demo/cat02.jpg';
import cat03 from 'assets/demo/cat03.jpg';

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

// const CardList = [
//   {
//     image: house01,
//     title: 'Uluwatu、印尼',
//     km: '3,825 公里',
//     price: '$4,868 TWD',
//   },
//   {
//     image: house02,
//     title: 'Uluwatu、印尼',
//     km: '3,825 公里',
//     price: '$4,868 TWD',
//   },
//   {
//     image: house03,
//     title: 'Uluwatu、印尼',
//     km: '3,825 公里',
//     price: '$4,868 TWD',
//   },
//   {
//     image: house04,
//     title: 'Uluwatu、印尼',
//     km: '3,825 公里',
//     price: '$4,868 TWD',
//   },
// ];

// const ModalDemo = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>
//       <Modal isOpen={isOpen} onClose={onClose} variant="main">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody h="200px">
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// const ModalDemoAccent = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>
//       <Modal variant="accent" isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody bg="blue.600" h="200px">
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//             <Text>
//               1. 建立 ModalContent ，添加 `overflow="hidden"`，
//               為了達成footer覆蓋和背景模糊效果，ModalFooter 已經改成
//               Postion:absolute，然後這樣造成footer的確空間重疊了，但也因此讓
//               content的圓角效果被遮住了，因此我們要使用 overflow="hidden"
//               讓超出去的邊角消失
//             </Text>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

const MotionTest = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    // offset: ['end end', 'start start'],
  });
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.2, // delay 的時間為 i* 0.2
        duration: 0.5,
        type: 'tween',
      },
    }),
    hidden: { opacity: 0 },
  };

  // useEffect(() => {
  //   return scrollYProgress.onChange(latest => {
  //     console.log('Page scroll: ', latest); // 會持續更新 console 滑動的位置
  //   });
  // }, []);

  const y1 = useTransform(scrollYProgress, [0.3, 1], [-200, 300]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.8], [-100, 100]);
  const y4 = useTransform(scrollYProgress, [0.3, 1], [-200, 300]);

  return (
    <Flex bgColor="gray.200" py="20px" my="20px">
      <Flex
        ref={ref}
        w="100%"
        border="1p solid red"
        bgColor="gray.200"
        h="800px"
        px="20%"
        align="center"
      >
        <MotionFlex
          initial="hidden"
          custom={2} //帶入 1
          animate="visible"
          variants={variants}
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          w="40%"
          position="sticky"
          top="50px"
        >
          <Text fontSize="55px" position="sticky" top="0">
            2022 <br /> Ironman{' '}
          </Text>
        </MotionFlex>
        <MotionFlex
          custom={1} //帶入 1
          initial="hidden"
          animate="visible"
          variants={variants}
          whileInView="visible"
          viewport={{ once: false, amount: 1 }}
        >
          <MotionImage
            style={{ y: y1, x: 20 }}
            bgColor="orange.600"
            w="180px"
            h="auto"
            src={cat01}
            rounded="md"
          ></MotionImage>
        </MotionFlex>
        <MotionImage
          style={{ y: y2, x: 10 }}
          bgColor="orange.600"
          w="180px"
          h="auto"
          src={cat03}
          rounded="md"
        ></MotionImage>
        <MotionImage
          style={{ y: y4, x: 0 }}
          bgColor="orange.600"
          w="180px"
          h="auto"
          src={cat02}
          rounded="md"
        ></MotionImage>
        {/* {scrollYProgress} */}
      </Flex>
    </Flex>
  );
};

const CardFixed = props => {
  const { image, title, km, price } = props;
  return (
    <Flex
      mx="12px"
      flex="1"
      border="1px solid"
      borderColor="gray.400"
      rounded="md"
      overflow="hidden"
      direction="column"
    >
      <Flex
        w="100%"
        h="160px"
        bgImage={image}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>
      <VStack p="12px" align="flex-start" spacing="2px">
        <Text fontWeight="500" fontSize="18px">
          {title}
        </Text>
        <Text color="gray.600">{km}</Text>
        <Text color="gray.600">{price}</Text>
      </VStack>
    </Flex>
  );
};

const CardRatio = props => {
  const { image, title, km, price } = props;
  return (
    <Flex
      mx="12px"
      flex="1"
      border="1px solid"
      borderColor="gray.400"
      rounded="md"
      overflow="hidden"
      direction="column"
    >
      <AspectRatio ratio={16 / 9}>
        <Flex
          w="100%"
          bgImage={image}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        ></Flex>
      </AspectRatio>
      <VStack p="12px" align="flex-start" spacing="2px">
        <Text fontWeight="500" fontSize="18px">
          {title}
        </Text>
        <Text color="gray.600">{km}</Text>
        <Text color="gray.600">{price}</Text>
      </VStack>
    </Flex>
  );
};

export function DesignSystemPage() {
  return (
    <Flex w="100%" justify="center">
      <Flex w="80%" pt="20px" direction="column">
        {/* <MotionTest /> */}
        {/* <HStack w="100%">
          <Button>鐵人賽</Button>
          <Button colorScheme="blue" isLoading>
            鐵人賽
          </Button>
          <Slider maxW="200px" aria-label="slider-ex-2" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Switch id="email-alerts" />
          <Code children="console.log(welcome)" />
        </HStack>

        <HStack w="100%" py="10px">
          <Input maxW="400px" placeholder="我是 outline" />
          <Input variant="filled" maxW="400px" placeholder="我是 filled" />
          <Button>參加鐵人賽</Button>
          <Button variant="outline">參加下次鐵人賽</Button>
        </HStack>
        <HStack w="100%" py="10px">
          <Input variant="filled" maxW="400px" placeholder="我是 filled" />
        </HStack>
        <HStack w="100%" py="10px">
          <Text textStyle="heading1"> 我是標題一 </Text>
          <ColorModeSwitcher />
        </HStack>
        <HStack w="100%" py="10px">
          <Button size="md">鐵人賽</Button>
          <Button size="sm">鐵人賽</Button>
          <Button size="fixedWidth">鐵人賽</Button>
          <Button variant="outline">鐵人賽</Button>
          <Button variant="secondary" size="md">
            鐵人賽
          </Button>
          <Button size="sm" variant="secondary">
            鐵人賽
          </Button>
          <Button size="md" variant="primary">
            鐵人賽
          </Button>
        </HStack>
        <HStack>
          <ModalDemo />
          <ModalDemoAccent />
        </HStack>
        <HStack>
          <Center h="50px" w="50px" border="1px solid red">
            20
          </Center>
        </HStack>
        <Flex py="20px">
          {CardList.map((item, index) => (
            <CardFixed key={index} {...item} />
          ))}
        </Flex>
        <Flex py="20px">
          {CardList.map((item, index) => (
            <CardRatio key={index + '02'} {...item} />
          ))}
        </Flex> */}
        <MotionTest />
        <MotionTest />
        <MotionTest />
        {/* <MotionTest /> */}
      </Flex>
    </Flex>
  );
}
