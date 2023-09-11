import twoSum from './index';

test('twoSum function is defined', () => {
  expect(typeof twoSum).toEqual('function');
});

test('twoSum handles an empty array', () => {
  expect(twoSum([], 9)).toEqual(null);
});

test('twoSum returns null if no solution is found', () => {
  expect(twoSum([1, 2, 3], 9)).toEqual(null);
});

test('twoSum returns the correct indices', () => {
  expect(twoSum([1, 2, 3], 5)).toEqual([1, 2]);
});

test('twoSum returns the correct indices', () => {
  expect(twoSum([1, 2, 3], 3)).toEqual([0, 1]);
});

test('twoSum returns the correct indices', () => {
  expect(twoSum([1, 2, 3], 4)).toEqual([0, 2]);
});
test('twoSum returns the correct indices', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('twoSum returns the correct indices', () => {
  expect(twoSum([11, 15, 2, 7], 9)).toEqual([2, 3]);
});

test('twoSum returns correct indices [1,2]', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('twoSum returns correct indices [0,1]', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
