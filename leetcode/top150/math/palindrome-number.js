/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let v = x.toString();
  let a = v.length - 1;
  for (let i = 0; i < v.length; i++) {
    if (v[i] !== v[a]) {
      return false;
    }
    if (i === a) {
      break;
    }
    a--;
  }
  return true;
};

let x = 10;
console.log(isPalindrome(x));
