/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 */
// var productExceptSelf = function (nums) {
//   let map = new Map();
//   let produto = 1;
//   let solution = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j <= nums.length; j++) {
//       if (j - 1 === i) {
//         continue;
//       }
//       produto *= j - 1 >= 0 ? nums[j - 1] : 1;
//     }
//     solution.push(produto);
//     produto = 1;
//   }
// };

var productExceptSelf = function (nums) {
  let n = nums.length;
  let solution = new Array(n).fill(1);

  // Passada 1: Calcula o produto de tudo à esquerda de cada elemento
  let produtoEsquerda = 1;
  for (let i = 0; i < n; i++) {
    solution[i] = produtoEsquerda;
    produtoEsquerda *= nums[i]; // Acumula o valor atual para o próximo elemento
  }

  // Passada 2: Calcula o produto da direita e já multiplica pelo valor da esquerda
  let produtoDireita = 1;
  for (let i = n - 1; i >= 0; i--) {
    solution[i] *= produtoDireita; // Multiplica o que já tinha (esquerda) pela direita
    produtoDireita *= nums[i]; // Acumula o valor atual para o elemento anterior
  }

  return solution;
};

console.log(productExceptSelf([1, 2, 3, 4]));

//     1   2   3   4
// 1   1   2   3   4 = 24
// 2   1   1   3   4 = 12
// 3   1   2   1   4 = 8
// 4   1   2   3   1 = 6
