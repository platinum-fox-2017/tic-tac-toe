// Solution 1
function tictactoe() {
  let array = [];
  let countx = 0;
  let counto = 0;
  for (var i = 0; i < 3; i++) {
    array.push([]);
    for (var j = 0; j < 3; j++) {
      let rand = Math.floor(Math.random() * 2);
      if (rand == 0) {
        if (countx < 5) {
          array[i].push('X');
          countx++;
        } else
          array[i].push('O');
      }
      if (rand == 1) {
        if (counto < 5) {
          array[i].push('O');
          counto++;
        } else
          array[i].push('X');
      }
    }
  }
  return array;
}


// Solution 2
function tictactoe() {
  let array = [];
  let countx = 0;
  let counto = 0;
  let xo = ['X', 'O'];
  for (var i = 0; i < 3; i++) {
    array.push([]);
    for (var j = 0; j < 3; j++) {
      let rand = Math.floor(Math.random() * 2);
      if (countx < 5 || counto < 5)
        array[i].push(xo[rand]);
      else
        array[i].push(xo[(rand == 0) ? 1 : 0]);
      (rand == 0) ? countx++ : counto++;

    }
  }
  return array;
}

console.log(tictactoe());
