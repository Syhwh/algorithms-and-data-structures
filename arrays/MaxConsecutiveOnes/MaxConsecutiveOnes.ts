/**
 * Time Complexity:

The time complexity of this function is O(n), where 'n' is the length 
of the numbers array. This is because the function iterates through 
the entire array once using a for...of loop. In each iteration, 
it performs constant-time operations such as comparisons and updates.

Space Complexity:

The space complexity of this function is O(1), which is constant space. 
Regardless of the size of the input array, the function uses a fixed amount 
of additional space to store only two variables: maxCount and currentCount. 
These variables do not depend on the input size and do not lead to increased 
space complexity as the array size grows.

 * @param numbers 
 * @returns 
 */
export default function findMaxConsecutiveOnes(numbers: number[]): number {
  let maxCount = 0; // Initialize the maximum count of consecutive 1s.
  let currentCount = 0; // Initialize the count of consecutive 1s for the current sequence.

  for (const num of numbers) {
    if (num === 1) {
      // If the current element is 1, increment the current count.
      currentCount++;
    } else {
      // If the current element is 0, update the maximum count if needed and reset the current count.
      maxCount = maxCount > currentCount ? maxCount : currentCount;
      currentCount = 0;
    }
  }

  // Update the maximum count one more time in case the array ends with consecutive 1s.
  maxCount = maxCount > currentCount ? maxCount : currentCount;

  return maxCount;
}
