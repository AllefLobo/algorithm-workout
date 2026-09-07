/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let a = 0;
  let b = height.length - 1;
  let v = 0;

  while (a < b) {
    if (height[a] < height[b]) {
      v = height[a] * (b - a) > v ? height[a] * (b - a) : v;
      a++;
    } else {
      v = height[b] * (b - a) > v ? height[b] * (b - a) : v;
      b--;
    }
  }
  return v;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
