import sanityClient from 'client.js';

export async function sanityFetcher(type, content) {
  const method = `*[_type == "${type}"] | order(_createdAt desc){
      ${content}
    }
    `;
  const data = await sanityClient.fetch(method);
  return data;
}

export async function sanityParamsFetcher(type, content, keyword) {
  const method = `*[_type == "${type}" && ($keyword in industry[] -> name  )] | order(priority desc, _updatedAt desc) {
      ${content}
    }
    `;
  const params = { keyword: keyword };
  const data = await sanityClient.fetch(method, params);
  // const data = await sanityClient.fetch(method);
  return data;
}

// export async function sanityParamsFetcher(type, content) {
//   const method = `*[_type == "${type}" && ($keyword match industry[] -> name  || $keyword2 match tag[] -> name)] | order(priority desc, _updatedAt desc) {
//       ${content}
//     }
//     `;
//   const params = { keyword: ['design/art'], keyword2: 'wordpress' };
//   const data = await sanityClient.fetch(method, params);
//   console.log(data);
//   return data;
// }

// const fetchContent = `*[_type == "website" && $keyword in tag[] -> name]{
//     name,
//     link,
//     tag[]->{name},
//     authors[]->{name,link},
//     color,
//     image{
//       asset->{
//         _id,
//         url
//       },
//     },
//   }
//   `;
// const params = {
//   keyword: 'wordpress',
// };

// useEffect(() => {
//   sanityClient
//     .fetch(fetchContent, params)
//     .then(data => setData(data))
//     .catch(console.error);
// }, []);
