/**
 *
 * @function fib_series - calculate the sum of Fibonacci sequence whose values do not
 * exceed four million
 * @returns {number} sum - sum of Even Fibonacci numbers
 *
 */

function fib_series() {
  const fib_arr = [1, 2];
  let term = 0;
  let sum = 2;
  while (fib_arr[fib_arr.length - 1] < 4e6) {
    term = fib_arr[fib_arr.length - 1] + fib_arr[fib_arr.length - 2];
    fib_arr.push(term);
    if (term % 2 === 0) sum += term;
  }
  return sum;
}

let result = fib_series();
console.log(result);
