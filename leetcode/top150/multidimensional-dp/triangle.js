/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let min = Number(triangle[0]);
  let index = 0;
  for (let i = 1; i < triangle.length; i++) {
    let linha = triangle[i];
    index = linha[index] > linha[index + 1] ? index + 1 : index;
    min += Number(linha[index]);
  }
  return min;
};

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
