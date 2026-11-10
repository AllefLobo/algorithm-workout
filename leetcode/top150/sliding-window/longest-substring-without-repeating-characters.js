/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let start = 0;
  let end = 0;
  let v = new Set();
  while (end <= s.length - 1) {
    while (!v.has(s[end]) && end <= s.length - 1) {
      v.add(s[end]);
      max = Math.max(max, end - start + 1);
      end++;
    }
    v.delete(s[start]);
    start++;
  }
  return max;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
