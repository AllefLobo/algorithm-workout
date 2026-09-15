/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (coin > i) {
        continue;
      }
      let v = 1 + dp[i - coin];
      dp[i] = v < dp[i] ? v : dp[i];
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

let coins = [1, 2, 5],
  amount = 11;
console.log(coinChange(coins, 11));
