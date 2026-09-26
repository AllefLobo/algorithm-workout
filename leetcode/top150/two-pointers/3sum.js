var mergeSort = function (nums, a, b) {
  if (a + 1 === b) {
    return nums[a] > nums[b] ? [nums[b], nums[a]] : [nums[a], nums[b]];
  }

  if (a === b) {
    return [nums[a]];
  }

  let metade = Math.floor((a + b) / 2);
  let list1 = mergeSort(nums, a, metade);
  let list2 = mergeSort(nums, metade + 1, b);

  let i = 0;
  let j = 0;
  let res = [];

  while (i < list1.length && j < list2.length) {
    res.push(list1[i] > list2[j] ? list2[j++] : list1[i++]);
  }

  return [...res, ...list1.slice(i), ...list2.slice(j)];
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let lista = mergeSort(nums, 0, nums.length - 1);

  let trio = new Set();
  let count = 0;
  let esq;
  let dir;
  while (count < lista.length - 1) {
    if (lista[count] === lista[count - 1]) {
      count++;
      continue;
    }
    esq = count + 1;
    dir = lista.length - 1;
    while (esq < dir) {
      let soma = lista[count] + lista[esq] + lista[dir];
      if (soma === 0) {
        trio.add(`${lista[count]}, ${lista[esq]}, ${lista[dir]}`);
        esq++;
        dir--;
      } else if (soma > 0) {
        dir--;
      } else {
        esq++;
      }
    }
    count++;
  }
  return [...trio].map((s) => s.split(", ").map(Number));
};

let nums = [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];
console.log(threeSum(nums));
