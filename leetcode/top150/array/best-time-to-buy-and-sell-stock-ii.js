/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  let a = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
      a += maxProfit;
      minPrice = prices[i];
      maxProfit = 0;
    }
  }
  return a;
};

let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
