/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (
  matrix,
  target,
  inicio = 0,
  fim = matrix.length - 1,
) {
  console.log(matrix.length);
  let meio = Math.floor(inicio + fim / 2);
  if (matrix.length === 1) {
    meio = Math.floor(inicio + fim / 2);
  } else if (matrix[meio][0] === target) {
    return true;
  } else if (matrix[meio][0] > target) {
    return searchMatrix(
      matrix[meio - 1],
      target,
      0,
      matrix[meio - 1].length - 1,
    );
  }
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(searchMatrix(matrix, target));
