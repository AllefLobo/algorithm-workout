/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (nums) {
  let map = new Map();
  map.set(1, "I");
  map.set(4, "IV");
  map.set(5, "V");
  map.set(9, "IX");
  map.set(10, "X");
  map.set(40, "XL");
  map.set(50, "L");
  map.set(90, "XC");
  map.set(100, "C");
  map.set(400, "CD");
  map.set(500, "D");
  map.set(900, "CM");
  map.set(1000, "M");
  let mapV = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let v = "";
  let count = 0;
  while (nums > 0) {
    if (nums - mapV[count] >= 0) {
      nums -= mapV[count];
      v = v + map.get(mapV[count]);
    } else {
      count++;
    }
  }
  return v;
};

let nums = 3749;
console.log(intToRoman(nums));

// Example 1:

// Input: num = 3749

// Output: "MMMDCC XL IX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
