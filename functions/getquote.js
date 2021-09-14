import fetch from 'node-fetch';
// export const getQuote = async () => {
//   const resp = await fetch(`${URL}Bender`);
//   const data = await resp.json();
//   return data;
// };
export const getQuote = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/characters/Bender';
  const res = await fetch(url);
  const body = await res.json();
  console.log(body[0]);
  
  return body[0];
};
