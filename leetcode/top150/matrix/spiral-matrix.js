/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let v = new Array();
  let set = new Set();
  let row = 0;
  let col = 0;
  let directions = [
    { left: 0, right: 1 },
    { left: 1, right: 0 },
    { left: 0, right: -1 },
    { left: -1, right: 0 },
  ];
  let d = 0;
  while (v.length <= m * n - 1) {
    let actual = matrix[row][col];
    v.push(actual);
    set.add(`${row},${col}`);

    let nextRow = row + directions[d].left;
    let nextCol = col + directions[d].right;
    if (
      nextRow < 0 ||
      nextRow >= m ||
      nextCol < 0 ||
      nextCol >= n ||
      set.has(`${nextRow},${nextCol}`)
    ) {
      d = (d + 1) % 4;
    }
    row = row + directions[d].left;
    col = col + directions[d].right;
  }
  return v;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));
