/**
 * Time Complexity:

    The countDigits function has a time complexity of O(log(N)),
    where N is the input number. This is because it iterates through 
    the digits of the number by repeatedly dividing it by 10. The number 
    of iterations required is proportional to the number of digits in the number, 
    which is roughly log(N) in base 10.

    The findNumbers function iterates through the numbers array using a for...of loop. 
    For each number in the array, it calls countDigits(number) 
    twice: once for logging and once for the modulo operation. 
    Therefore, the time complexity of the findNumbers function is O(N * log(N)), 
    where N is the length of the numbers array.

Overall, the time complexity of the entire code is dominated by the findNumbers 
function, and it is O(N * log(N)).

Space Complexity:
    The space complexity of the code is O(1), which means it uses a constant 
    amount of additional space regardless of the input size. 
    This is because the code does not create any data structures or allocate memory 
    that depends on the input size. 
    The only variables used are number, count, and total, which do not grow with 
    the input size.
 * @param number 
 * @returns 
 */

    function countDigits(number: number): number {
        if (number === 0) return 1;
      
        let count = 0;
      
        while (number !== 0) {
          number = Math.floor(number / 10);
          count++;
        }
        return count;
      }
      
      /**
       *
       * @param numbers
       * @returns
       */
      export default function findNumbers(numbers: number[]): number {
        let total = 0;
        for (let number of numbers) {
          console.log(countDigits(number));
          if (countDigits(number) % 2 === 0) {
            console.log('even');
            total++;
          }
        }
        return total;
      }
      