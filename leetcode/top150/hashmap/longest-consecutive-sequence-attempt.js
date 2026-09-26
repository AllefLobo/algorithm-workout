/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:

Input: nums = [1,0,1,2]
Output: 3
 */

function recursiveCount(a, b, m) {
  console.log(`recursiveCount ${a} ${b} ${m}`);
  if (m.get(b) === m.get(a)) {
    return 0;
  }
  return 1 + recursiveCount(m.get(b), m.get(b - 1), m);
}

var longestConsecutive = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    let itemEsq = item - 1;
    let itemDir = item + 1;
    if (!map.has(item)) {
      map.set(item, new Map());
    }
    if (map.has(itemEsq)) {
      map.get(itemEsq).set(item, map.get(item));
      map.get(item).set(itemEsq, map.get(itemEsq));
    }
    if (map.has(itemDir)) {
      map.get(itemDir).set(item, map.get(item));
      map.get(item).set(itemEsq, map.get(itemDir));
    }
  }

  let maior = 1;
  for (let [k, v] of map) {
    console.log(`${k} ${v}`);
    let count = 1;
    if (v.size > 0) {
      count = recursiveCount(k, v, map);
      console.log(count);
      if (count > maior) {
        maior = count;
      }
    }
  }

  return maior;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4

// map = {
//     100: {}
//     4: { 3: {} }
//     200: {}
//     3: {2 {}}
//     1: { 2 {} }
//     2: { 3 {}}
// }
