/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let a = [];
  let line = [];
  let count = 0;

  while (count < words.length) {
    let word = words[count];
    if (
      line.join(" ").length + word.length + (line.length ? 1 : 0) <=
      maxWidth
    ) {
      line.push(word);
    } else {
      a.push(line);
      line = [word];
    }
    count++;
  }

  if (line.length) {
    a.push(line);
  }

  let text = [];
  for (let i = 0; i < a.length; i++) {
    let line = "";
    if (i === a.length - 1) {
      line = a[i].join(" ");
      line = line + " ".repeat(maxWidth - line.length);
    } else {
      let letters = a[i].join("");
      let extra = maxWidth - letters.length;
      let gaps = a[i].length - 1;
      let gap = Math.floor(extra / gaps);
      let resto = extra % gaps;
      line = a[i][0];
      if (gaps === 0) {
        line = line + " ".repeat(extra);
      } else {
        for (let j = 1; j < a[i].length; j++) {
          line += " ".repeat(gap + (j <= resto ? 1 : 0)) + a[i][j];
        }
      }
    }
    text.push(line);
  }
  return text;
};

let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
console.log(fullJustify(words, maxWidth));
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
