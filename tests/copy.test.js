import copyAndPush from '../functions/copy.js';

describe('copyAndPush', () => {
  it('adds 4 pushed to the end of array.', () => {
    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]); // return [1, 2, 3, 4];
  });
  it('adds randomnum pushed to the end to array.', () => {
    const numbers = [1, 2, 3];
    const randomNum = Math.floor(Math.random() * 10);
    expect(copyAndPush(numbers, randomNum)).toEqual([1, 2, 3, randomNum]); // return [1, 2, 3, 4];
    // expect(numbers).toEqual([1, 2, 3]);
  });
    
  
});
