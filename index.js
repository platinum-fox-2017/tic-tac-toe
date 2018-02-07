function ticTacToe(row, col) {
  let result = [];
  let rows = [];
  let max = Math.round(row * col / 2);

  let i = 0;
  while (i < max) {
    rows.push("X");
    i++;
  }

  let j = 0;
  while (j < max) {
    let randomInsert = Math.round(Math.random() * (rows.length + 1));
    rows.splice(randomInsert, 0, "O");
    j++;
  }

  let count = 0;
  for (let k = 0; k < row; k++) {
    result.push([]);
    for (let m = 0; m < col; m++) {
      result[k].push(rows[count]);
      count++;
    }
  }

  return result;
}

console.log(ticTacToe(3, 3));
