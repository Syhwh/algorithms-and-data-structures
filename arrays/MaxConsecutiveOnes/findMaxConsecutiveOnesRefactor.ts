export default function findMaxConsecutiveOnes(numbers: number[]): number {
  let max = 0;
  let current = 0;

  for (let number of numbers) {
    if (number === 1) {
      current++;
    } else {
      current = 0;
    }
    if (max < current) {
      max = current;
    }
  }
  return max;
}
