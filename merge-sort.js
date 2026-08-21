function mergesort(list, a, b) {
  if (a + 1 === b) {
    return list[a] > list[b] ? [list[b], list[a]] : [list[a], list[b]];
  }
  if (a === b) {
    return [list[a]];
  }
  let metade = Math.floor((a + b) / 2);
  let list1 = mergesort(list, a, metade);
  let list2 = mergesort(list, metade + 1, b);

  let i = 0;
  let j = 0;
  let res = [];

  while (i < list1.length && j < list2.length) {
    res.push(list1[i] > list2[j] ? list2[j++] : list1[i++]);
  }

  return [...res, ...list1.slice(i), ...list2.slice(j)];
}

// let list = [38, 27, 43, 3, 9, 82, 10];
let list = [3, 2, 1];
console.log(mergesort(list, 0, 2));
