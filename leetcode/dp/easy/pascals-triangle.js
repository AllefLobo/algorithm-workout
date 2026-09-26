/**
 *
 * solved true
 *
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let dp = new Array(numRows).fill(new Array());
  dp[0] = [1];
  for (let i = 1; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(1);
    for (let x = 1; x < i; x++) {
      dp[i][x] = dp[i - 1][x - 1] + dp[i - 1][x];
    }
  }
  return dp;
};

let numRows = 3;
console.log(generate(numRows));
