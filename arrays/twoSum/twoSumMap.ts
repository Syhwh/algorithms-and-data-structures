/**
 * This implementation has a time complexity of O(n)
 * and a space complexity of O(n), where 'n' is the
 * length of the input array numbers.
 * @param numbers 
 * @param target 
 * @returns 
 */
export default function twoSum(
  numbers: number[],
  target: number
): number[] | null {
  const mapIndex: Map<number, number> = new Map<number, number>();
  for (let i = 0; i <= numbers.length; i++) {
    const newTarget = target - numbers[i];
    if (mapIndex.has(newTarget)) {
      return [mapIndex.get(newTarget)!, i];
    } else {
      mapIndex.set(numbers[i], i);
    }
  }
  return null;
}
