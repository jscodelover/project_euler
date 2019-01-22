"use strict";
/**
 * @Author : JsCodeLover
 * @Problem : A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
   Find the largest palindrome made from the product of two 3-digit numbers.
 * @function isPalindrome - take a number and check if it is palindrome or not.
 * @return {number} big - the largest palindrome product made using 3 digit numbers
 */

function largest_palindrome() {
  let big = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (isPalindrome(i * j)) {
        if (big < i * j) {
          big = i * j;
        }
      }
    }
  }
  return big;
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
