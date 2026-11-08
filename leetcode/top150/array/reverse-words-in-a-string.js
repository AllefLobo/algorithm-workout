/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reverse = s
    .split(/\s/)
    .filter((v) => v !== "")
    .reverse()
    .join(" ");
  return reverse;
};

let s = "  hello world  ";
console.log(reverseWords(s));
