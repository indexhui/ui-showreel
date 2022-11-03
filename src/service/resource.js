import { sanityFetcher, sanityParamsFetcher } from './helper';

const webSiteContent = `name,
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
      },`;

export function useResourceService() {
  return {
    /**
     * Get all users
     * @method getWebsiteResource
     * @returns {Array} array of all WebsiteResource
     */
    getWebsiteResource: async () => {
      return sanityFetcher('website', webSiteContent);
    },

    getWebsiteResourceFilter: async keyword => {
      return sanityParamsFetcher('website', webSiteContent, keyword);
    },

    getPortfolio: async () => {
      return sanityFetcher('portfolio', 'name,title,relatedUrl,link');
    },
  };
}
