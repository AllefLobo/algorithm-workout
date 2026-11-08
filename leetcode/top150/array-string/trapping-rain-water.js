/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let agua = 0;
  let rigthMax = Array(height.length);

  let maior = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    if (i + 1 <= height.length - 1 && height[i + 1] >= maior) {
      maior = height[i + 1];
    }
    rigthMax[i] = maior;
  }

  let leftMax = 0;
  for (let i = 0; i < height.length; i++) {
    if (i - 1 >= 0 && height[i - 1] >= leftMax) {
      leftMax = height[i - 1];
    }
    agua = agua + Math.max(0, Math.min(leftMax, rigthMax[i]) - height[i]);
  }
  return agua;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
