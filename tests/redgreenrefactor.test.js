import getName from '../functions/redgreenrefactor.js';

// const spot = { name: 'spot', age: 5, weight: '20 lbs' };
// getName(spot); // returns spot

// const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
// getName(character); // returns Aang

describe('getName', () => {
  it('grabs the name from an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    expect(getName(spot)).toEqual('spot'); // returns spot
  });
  it('grabs the name from an object', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    expect(getName(character)).toEqual('Aang'); // returns Aang
  });
});
