import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client.js';

const useImageBuilder = source => {
  const builder = imageUrlBuilder(sanityClient);
  if (source) {
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
