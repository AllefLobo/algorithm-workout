/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let v = n;
  for (let i = n - 1; i >= 1; i--) {
    v = v * i;
  }
  let count = 0;
  while (v > 0 && v % 10 === 0) {
    v = v / 10;
    count++;
  }
  return count;
};

let n = 5;
console.log(trailingZeroes(n));
