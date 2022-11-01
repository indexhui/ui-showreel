import sanityClient from 'client.js';

// export default async function fetcher(url, method, body, ...arg) {
//   const res = await fetch(`${url}.json`, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//     ...arg,
//   });

//   const data = await res.json();

//   if (res.status !== 200) {
//     throw new Error(data.error);
//   }

//   return data;
// }

export default async function sanityFetcher(type, content) {
  const method = `*[_type == "${type}"]{
      ${content}
    }
    `;
  const data = await sanityClient.fetch(method);
  return data;
}
