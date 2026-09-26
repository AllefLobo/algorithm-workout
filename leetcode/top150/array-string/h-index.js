/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let h = 0;
  for (let i = citations.length - 1; i >= 0; i--) {
    if (citations[i] > h) {
      h++;
    } else {
      break;
    }
  }
  return h;
};

let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));
