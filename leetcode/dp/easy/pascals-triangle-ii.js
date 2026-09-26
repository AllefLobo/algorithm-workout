/**
 *
 * solved true
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let dp = new Array(rowIndex + 1).fill(new Array());
  dp[0] = [1];
  for (let i = 1; i < rowIndex + 1; i++) {
    dp[i] = new Array(i + 1).fill(1);
    for (let x = 1; x < i; x++) {
      dp[i][x] = dp[i - 1][x - 1] + dp[i - 1][x];
    }
  }
  return dp[rowIndex];
};

let rowIndex = 3;
console.log(getRow(rowIndex));
