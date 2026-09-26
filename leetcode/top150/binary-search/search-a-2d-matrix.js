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
  if (inicio < fim) {
    let meio = Math.floor((inicio + fim) / 2);
    let valueMeio = matrix[meio][0];

    if (target === valueMeio) {
      return true;
    }

    if (target < valueMeio) {
      return searchMatrix(matrix, target, (inicio = inicio), (fim = meio - 1));
    } else {
      return searchMatrix(matrix, target, (inicio = meio + 1), (fim = fim));
    }
  }

  console.log(matrix[inicio], target, inicio, fim);
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 20;

console.log(searchMatrix(matrix, target));
