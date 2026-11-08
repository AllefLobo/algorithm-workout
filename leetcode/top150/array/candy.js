/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let v = Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; i++) {
    if (
      i + 1 <= ratings.length - 1 &&
      ratings[i + 1] > ratings[i] &&
      v[i + 1] <= v[i]
    ) {
      let diff = Math.max(v[i + 1], v[i]);
      v[i + 1] = diff + 1;
    }
  }
  let soma = 0;
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (i - 1 >= 0 && ratings[i - 1] > ratings[i] && v[i - 1] <= v[i]) {
      let diff = Math.max(v[i - 1], v[i]);
      v[i - 1] = diff + 1;
    }
    soma = soma + v[i];
  }
  return soma;
};

let ratings = [1, 0, 2];
console.log(candy(ratings));
