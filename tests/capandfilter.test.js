import capAndFilt from '../functions/capandfilter';

describe('capAndFilt', () => {
  it('capitilizes and removes f from array.', () => {
    const arr = ['a', 'b', 'e', 'f'];
    expect(capAndFilt(arr)).toEqual(['A', 'B', 'E']);
  });  
});
  
