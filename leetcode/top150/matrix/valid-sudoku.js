/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let subs = new Map();
  let cols = new Map();

  for (let i = 0; i < 9; i++) {
    let row = new Set();

    const subI = Math.floor(i / 3);
    for (let j = 0; j < 9; j++) {
      let a = board[i][j];
      let v = a === "." ? undefined : Number.parseInt(a);

      const subJ = Math.floor(j / 3);
      const subIJ = subI + "" + subJ;
      if (!subs.has(subIJ)) {
        subs.set(subIJ, new Set());
      }

      if (!cols.has(j)) {
        cols.set(j, new Set());
      }

      if (v !== undefined) {
        if (cols.get(j).has(v) || row.has(v) || subs.get(subIJ).has(v)) {
          return false;
        }
        row.add(v);
        cols.get(j).add(v);
        subs.get(subIJ).add(v);
      }
    }
  }

  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
