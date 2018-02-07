function ticTacToe(){
  let result = [];
  let countX = 0;
  let countO = 0;

  for(let i=0; i<3; i++){
    let row = [];
    for(let j=0; j<3; j++){
      let random = Math.round(Math.random())
      if(random === 0 && countX < 5){
        row.push('X');
        countX++
      } else if(random === 1 && countO < 5){
        row.push('O');
        countO++
      } else if(countX === 5){
        row.push('O');
      } else if(countO === 5){
        row.push('X');
      }
    }
    result.push(row)
  }
  return result
}

console.log(ticTacToe())
