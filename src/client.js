import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '13p5shab', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: true,
});
