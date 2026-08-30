/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (nums) {
  let map = new Map();
  map.set(1, "I");
  map.set(5, "V");
  map.set(10, "X");
  map.set(50, "L");
  map.set(100, "C");
  map.set(500, "D");
  map.set(1000, "M");
  let values = [1000, 500, 100, 50, 10, 5, 1];

  if (map.has(nums)) {
    return map.get(nums);
  }

  count = 0;
  let a = "";
  while (nums > 0) {
    if (nums - values[count] >= 0) {
      nums = nums - values[count];
      a = a + map.get(values[count]);
      continue;
    }
    count++;
  }
  return a;
};
let nums = 3749;
console.log(intToRoman(4));

// Example 1:

// Input: num = 3749

// Output: "MMMDCC XL IX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
