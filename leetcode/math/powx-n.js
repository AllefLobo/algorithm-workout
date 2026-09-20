/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let v = 1;
  for (let i = 0; i < Math.abs(n); i++) {
    v *= x;
  }
  return n > 0 ? v : 1 / v;
};

let x = 2.1,
  n = 3;
console.log(myPow(x, n));
