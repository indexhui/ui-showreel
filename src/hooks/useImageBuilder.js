import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client.js';

const useImageBuilder = source => {
  const builder = imageUrlBuilder(sanityClient);
  if (!source) {
    console.log('2', source);
  }
  if (source) {
    console.log(source);
    function urlFor(source) {
      return builder.image(source);
    }

    const url = urlFor(source).url();
    return {
      url,
    };
  }
};

export default useImageBuilder;
