/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function (n, k) {
  let memo = [];
  let x = Math.max(1, n - k);
  let count = 0;
  while (Math.abs(n - x) <= k) {
    if ((n & x) == 0) {
      if (count === 0) {
        memo[count] = x;
      } else {
        memo[count] = memo[count - 1] + x;
      }
      count++;
    }
    x++;
  }
  return memo[count - 1] || 0;
};

let n = 3,
  k = 3;
console.log(sumOfGoodIntegers(n, k));
