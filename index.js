function ticTacBoard(){
  let board = { row: 3, collumn: 3 };
  let boardVol = board.row * board.collumn;
  let rows = [];
  let xo = 'XO';
  let XCount = 0;
  let OCount = 0;
  for (let i = 1; i <= board.row; i++) {
    rows.push([]);
  }
  for (let i = 0; i < rows.length; i++) {
    for (let j = 1; j <= board.collumn; j++) {
      if (XCount < 5 && OCount < 5) {
        // inserting. call x or o
        let input = genXO();
        rows[i].push(input);
        // if input is x
        if (input === 'X') {
          XCount += 1;
        } else {
          OCount += 1;
        }
      } else {
        if (XCount >= 5) {
          rows[i].push(xo[1]);
          OCount +=1;
        } else {
          rows[i].push(xo[0]);
          XCount += 1;
        }
      }
    }
  }
  /* 3x3 view */
  // for (let i = 0; i < board.row; i++) {
  //   console.log(rows[i])
  // }
  return rows;
}

// generate x or o
function genXO(){
  let xo = 'XO';
  let randomIO = Math.round(Math.random());
  return xo[randomIO]
}

console.log(ticTacBoard());
