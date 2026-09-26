/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let v = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    v[i] = nums.reduce((a, b, index) => {
      return index === i ? a * 1 : a * b;
    }, 1);
  }
  return v;
};

let nums = [4, 3, 2, 1, 2];
console.log(productExceptSelf(nums));

//[12,16,24,48,24]
