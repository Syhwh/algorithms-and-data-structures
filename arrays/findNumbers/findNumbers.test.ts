import countNumbersWithEvenDigits from './index';

test('findMaxConsecutiveOnes function is defined', () => {
  expect(typeof countNumbersWithEvenDigits).toEqual('function');
});
describe('countNumbersWithEvenDigits', () => {
  it('Test Case 1: should return 2 for [12,345,2,6,7896]', () => {
    expect(countNumbersWithEvenDigits([12, 345, 2, 6, 7896])).toBe(2);
  });

  it('Test Case 2: should return 1 for [555,901,482,1771]', () => {
    expect(countNumbersWithEvenDigits([555, 901, 482, 1771])).toBe(1);
  });

  it('Test Case 3: should return 0 for an empty array', () => {
    expect(countNumbersWithEvenDigits([])).toBe(0);
  });

  it('Test Case 4: should return 0 for [9, 111, 3333, 55555]', () => {
    expect(countNumbersWithEvenDigits([9, 111, 33313, 55555])).toBe(0);
  });

  it('Test Case 5: should return 3 for [12, 34, 567, 89012]', () => {
    expect(countNumbersWithEvenDigits([12, 34, 567, 890122])).toBe(3);
  });
});
