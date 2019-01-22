"use strict";
/**
 * @Author : JsCodeLover
 * @Problem : A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
   Find the largest palindrome made from the product of two 3-digit numbers.
 * @function isPalindrome - take a number and check if it is palindrome or not.
 * @return {number} max - the largest palindrome product made using 3 digit numbers.
 * 
 * Solution explanation :
 *   The palindrome can be written as:
 *   abccba
 *   Which then simpifies to:
 *   100000a + 10000b + 1000c + 100c + 10b + a
 *   And then:
 *   100001a + 10010b + 1100c
 *   Factoring out 11, you get:
 *   11(9091a + 910b + 100c)
 *   So the palindrome must be divisible by 11.  Seeing as 11 is prime, at least one of the numbers must be divisible by 11.
 * 
 */

function largest_palindrome() {
  let max = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 990; j >= 100; j -= 11) {
      if (isPalindrome(i * j)) {
        if (max < i * j) {
          max = i * j;
        }
      }
    }
  }
  return max;
}

function isPalindrome(num) {
  let rev = "";
  for (let d of num.toString()) {
    rev = d + rev;
  }
  return num == rev;
}

const result = largest_palindrome();
console.log(result);
