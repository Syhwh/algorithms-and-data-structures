/**
 * The two-pointer approach for the Two Sum problem has a time complexity of O(n log n) due to sorting and a space complexity of O(n) due to the sorted copy of the input array.
 * Time Complexity:
 * 
 * The time complexity of this approach is primarily dominated by the sorting step, 
 * which has a time complexity of O(n log n), where 'n' is the length of the input
 * array numbers. After sorting, the two-pointer traversal takes O(n) 
 * time in the worst case because you traverse the sorted array once. 
 * Therefore, the overall time complexity is O(n log n) due to the sorting step.
 * 
 * Space Complexity:
 * The space complexity of this approach is O(n) because we create a sorted 
 * copy of the numbers array, which has a length of 'n'. 
 * This sorted copy is stored in the sortedNumbers array. 
 * Additionally, the other variables used in the algorithm, such as left, right, 
 * and the constants, do not grow with the input size, so they don't significantly 
 * impact the space complexity.

 * @param numbers 
 * @param target 
 * @returns 
 */
export default function twoSum(
  numbers: number[],
  target: number
): number[] | null {
  // Create a sorted copy of the input array
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  // Initialize left and right pointers
  let left = 0;
  let right = sortedNumbers.length - 1;

  while (left < right) {
    const currentSum = sortedNumbers[left] + sortedNumbers[right];

    if (currentSum === target) {
      // Find the indices of the two numbers in the original array
      const leftIndex = numbers.indexOf(sortedNumbers[left]);
      const rightIndex = numbers.lastIndexOf(sortedNumbers[right]);

      return [leftIndex, rightIndex];
    }

    if (currentSum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return null;
}
