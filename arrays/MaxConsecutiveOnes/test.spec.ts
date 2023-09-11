import findMaxConsecutiveOnes from './index';

test('findMaxConsecutiveOnes function is defined', () => {
  expect(typeof findMaxConsecutiveOnes).toEqual('function');
});

describe('findMaxConsecutiveOnes', () => {
  it('Example 1: should return 3 for [1,1,0,1,1,1]', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });

  it('Example 2: should return 2 for [1,0,1,1,0,1]', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
  });

  it('Test Case 1: should return 1 for [1]', () => {
    expect(findMaxConsecutiveOnes([1])).toBe(1);
  });

  it('Test Case 2: should return 0 for [0]', () => {
    expect(findMaxConsecutiveOnes([0])).toBe(0);
  });

  it('Test Case 3: should return 0 for [] (empty array)', () => {
    expect(findMaxConsecutiveOnes([])).toBe(0);
  });

  it('Test Case 4: should return 4 for [1, 1, 1, 1]', () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 1])).toBe(4);
  });

  it('Test Case 5: should return 1 for [0, 0, 0, 1]', () => {
    expect(findMaxConsecutiveOnes([0, 0, 0, 1])).toBe(1);
  });

  it('Test Case 6: should return 3 for [1, 0, 1, 1, 1, 0, 1, 1, 1, 1]', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 1, 1, 1, 1])).toBe(4);
  });

  it('Test Case 7: should return 2 for [1, 0, 0, 1, 1, 1, 0, 1]', () => {
    expect(findMaxConsecutiveOnes([1, 0, 0, 1, 1, 1, 0, 1])).toBe(3);
  });

  it('Test Case 8: should return 6 for [1, 1, 1, 1, 1, 1]', () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1])).toBe(6);
  });

  it('Test Case 9: should return 3 for [0, 0, 1, 1, 1, 0, 0, 1, 1]', () => {
    expect(findMaxConsecutiveOnes([0, 0, 1, 1, 1, 0, 0, 1, 1])).toBe(3);
  });

  it('Corner Case 1: should return 1 for an array with alternating ones and zeros', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 0, 1, 0])).toBe(1);
  });

  it('Corner Case 2: should return 1 for an array with a single one surrounded by zeros', () => {
    expect(findMaxConsecutiveOnes([0, 1, 0])).toBe(1);
  });
});
