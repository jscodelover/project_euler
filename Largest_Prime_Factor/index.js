"use strict";

/**
 * @Author : JsCodeLover
 * @Problem :  The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?
*/

/**
 * @function multiple  find the first multiple of argument n. eg(first multiple of 16 is 2.)
 * @param {number} n  for which multiple is to be found.
 */
function multiple(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return i;
    }
  }
  return n;
}

/**
 * @function largest_prime_factor  find th largest prime factor
 * @param {*} dividend the number whose prime factor is to be found
 * @returns {number} result  largest prime factor
 */

function largest_prime_factor(dividend) {
  let divisior = dividend;
  let result;

  while (divisior > 1) {
    divisior = multiple(dividend);
    dividend = dividend / divisior;
    if (divisior !== 1) result = divisior;
  }
  return result;
}

const result = largest_prime_factor(600851475143);
console.log(result);
