import { useEffect, useState } from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import useImageBuilder from 'hooks/useImageBuilder';
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Card = props => {
  const { name, image } = props;
  const { url } = useImageBuilder(image);
  return (
    <Flex
      w="160px"
      border="1px solid #00000030"
      h="50px"
      justify="center"
      align="center"
    >
      <Text>{name || 'cardName'}</Text>
      {/* <Text>{image.asset.url}</Text> */}
      <Image src={url} />
    </Flex>
  );
};

export function Sanity() {
  const [data, setData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "animal"]{
      name,
      title,
      slug,
      animalDesc,
      image{
        asset->{
          _id,
          url
        },
      },
    }
    `
      )
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  console.log(data);

  return (
    <Flex>
      Sanity
      <Flex>
        {data &&
          data.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              // image={item.image}
            />
          ))}
      </Flex>
    </Flex>
  );
}
