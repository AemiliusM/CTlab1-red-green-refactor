import { getQuote } from '../functions/getquote.js';

// describe('getQuote', () => {
//   it('displays', () => {
//     const quotes = {
//       character: '...',
//       quote: '...',
//       image: '...'
//     };
//     expect(getQuote(quotes)).toEqual({
//       character: 'Bender',
//       quote: 'I\'m a fraud. A poor, lazy, sexy fraud.',
//       image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
//     }); 
//   });
      
    
// });
  
describe('getQuote', () => {
  it('returns a single quote with name text and image information', async () => {
    const actual = await getQuote();

    expect(actual).toEqual({
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String)
    });
  });
});
