/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack === needle) {
    return 0;
  }
  if (needle.length > haystack.length) {
    return -1;
  }
  let count = 0;
  let a = haystack[count];
  while (
    haystack[count] !== undefined &&
    haystack[count + needle.length - 1] !== undefined
  ) {
    console.log(haystack.slice(count, count + needle.length), needle);
    if (haystack.slice(count, count + needle.length) === needle) {
      return count;
    }
    count++;
  }
  return -1;
};

let haystack = "abc",
  needle = "c";
console.log(strStr(haystack, needle));

/**
 * Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

 */
