/**
 * This implementation has a time complexity of O(n^2)
 * and a space complexity of O(1), where 'n' is the
 * length of the input array numbers.
 * 
 * @param numbers 
 * @param target 
 * @returns 
 */
export default function twoSum(
  numbers: number[],
  target: number
): number[] | null {
  let newTarget = 0;
  for (let i = 0; i < numbers.length; i++) {
    newTarget = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === newTarget) {
        return [i, j];
      }
    }
  }
  return null;
}
