/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  for (let i = 1; i < numbers.length; i++) {
    let v = numbers[left] + numbers[right];
    if (v === target) {
      break;
    }
    if (v > target) {
      right--;
    }

    if (v < target) {
      left++;
    }
  }
  return [left + 1, right + 1];
};

let numbers = [-5, -3, 0, 2, 4, 6, 8],
  target = 5;

console.log(twoSum(numbers, target));

//  -3 e 8
