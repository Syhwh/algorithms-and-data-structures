/**
 * The time and space complexity for the provided code are as follows:
 * Time Complexity:
 * The code iterates through the numbers array using a for...of loop.
 * For each number in the array, it converts the number to a string
 * using number.toString().length to get the number of digits and then checks
 * if this number is even (i.e., divisible by 2). Converting a number to a string
 * typically has a time complexity of O(log(N)), where N is the value of the number.
 *
 * Therefore, the time complexity of the findNumbers function is O(N * log(N)),
 * where N is the length of the numbers array. This is because for each number
 * in the array, the code performs string conversion and checks the length of
 * the string.
 *
 * Space Complexity:
 *
 * The space complexity of the code is O(1), which means it uses a constant
 * amount of additional space regardless of the input size.
 * The only variables used are count and number, which do not grow with
 * the input size.
 *
 * @param numbers
 * @returns
 */

export default function findNumbers(numbers: number[]): number {
  let count = 0;
  for (let number of numbers) {
    if (number.toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
}
