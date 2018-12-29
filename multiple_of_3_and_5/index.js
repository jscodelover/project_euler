/**
 *
 * @param {number} limit - upto what natural number we want to find the multiple sum.
 * @returns {number} sum - sum of all the multiples of 3 or 5.
 *
 */

function multiple(limit) {
  if (limit < 1000) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  return 0;
}

const result = multiple(153);
console.log(result);
