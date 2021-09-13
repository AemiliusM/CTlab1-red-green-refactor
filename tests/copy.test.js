import copyAndPush from '../functions/copy.js';

describe('copyAndPush', () => {
  it(' creates a new array with all the items in the original array and a new item pushed to the end.', () => {
    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]); // return [1, 2, 3, 4];
  });
    
});
