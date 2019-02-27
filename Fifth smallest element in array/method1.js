"use-strict";

/**
 * @Author : JsCodeLover
 * @Problem : Find the 5th smallest element in the array.
 */

/**
 * @function largest_fifth_no  find the 5th smallest element using the concept of finding the first
 *  five smallest elements in array.
 * @param {array} arr  array from which 5th element is to be find
 * @returns {number} n5  5th smallest element
 */

function largest_fifth_no(arr) {
  let n1 = null;
  let n2 = null;
  let n3 = null;
  let n4 = null;
  let n5 = null;
  for (let ele of arr) {
    if (!n1 || n1 > ele) {
      n5 = n4;
      n4 = n3;
      n3 = n2;
      n2 = n1;
      n1 = ele;
    } else if (!n2 || n2 > ele) {
      n5 = n4;
      n4 = n3;
      n3 = n2;
      n2 = ele;
    } else if (!n3 || n3 > ele) {
      n5 = n4;
      n4 = n3;
      n3 = ele;
    } else if (!n4 || n4 > ele) {
      n5 = n4;
      n4 = ele;
    } else {
      n5 = ele;
    }
  }
  return n5;
}

const result = largest_fifth_no([9, 8, 5, 1, 7, 3, 6, 2]);
console.log(`5th smallest element: ${result}`);
