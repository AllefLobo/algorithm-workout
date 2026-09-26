/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, a = [0, 1, 2]) {
  if (a[n] === undefined) {
    a[n] = climbStairs(n - 1, a) + climbStairs(n - 2, a);
  }

  return a[n];
};

let n = 45;
console.log(climbStairs(n));
