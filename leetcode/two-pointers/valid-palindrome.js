/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let a = s;
  s = s
    .split("")
    .filter((a) => a.match(/[a-zA-Z0-9]/))
    .join("")
    .toLowerCase();
  a = a
    .split("")
    .reverse()
    .filter((a) => a.match(/[a-zA-Z0-9]/))
    .join("")
    .toLowerCase();
  return s === a;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
