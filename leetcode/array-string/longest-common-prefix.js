/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs, tam = 0) {
  let a = strs[0][tam];
  if (a === undefined) {
    return "";
  }
  for (let i = 1; i < strs.length; i++) {
    if (strs[i][tam] !== a) {
      return "";
    }
  }
  return a + longestCommonPrefix(strs, tam + 1);
};

let strs = ["a", "a", "a"];
console.log(longestCommonPrefix(strs));
