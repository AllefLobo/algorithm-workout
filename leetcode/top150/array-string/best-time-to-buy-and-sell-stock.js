/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (i < prices.length - 1 && prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] !== minPrice && prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

let prices = [2, 1, 2, 0, 1];
console.log(maxProfit(prices));
