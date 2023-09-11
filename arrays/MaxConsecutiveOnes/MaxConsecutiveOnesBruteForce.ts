export default function findMaxConsecutiveOnes(numbers: number[]): number {
  let right = 0;
  let max = 0;

  if (!numbers.length) return 0;
  if (numbers.length === 1) return numbers[0] ? 1 : 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      for (let j = i; j < numbers.length; j++) {
        if (numbers[j] === 1) {
          right++;
          max = right > max ? right : max;
          i = j + 1;
        } else {
          right = 0;
          break;
        }
      }
    }
  }
  return max;
};