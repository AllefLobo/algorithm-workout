/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let v = new Array(numRows).fill("");
  let count = 0;
  let x;
  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      x = +1;
    } else if (count === numRows - 1) {
      x = -1;
    }
    v[count] += s[i];
    count = count + x;
  }
  return v.join("");
};

let s = "PAYPALISHIRING",
  numRows = 4;

console.log(convert(s, numRows));
