function ticTacToeGame(x,o) {
  let ticTacToeBoard = [];
  let sisi = 3;
  let xoxo = []

  for(let i=0; i<sisi; i++) {
    ticTacToeBoard.push([])
  }

  for(let i=0; i<jumlahX; i++) {
    xoxo.push('X')
  }
  for(let i=0; i<jumlahO; i++) {
    xoxo.push('O')
  }

  for(var i=0; i<ticTacToeBoard.length; i++) {
    for(var j=0; j<3; j++) {
      var isi = Math.floor((Math.random()*xoxo.length-1)+1)
      ticTacToeBoard[i].push(xoxo[isi])
      xoxo.splice(isi,1)
    }
  }
  return ticTacToeBoard
}

let jumlahX = Math.floor((Math.random()*2)+4)
let jumlahO = jumlahX === 5? 4:5

console.log(ticTacToeGame(jumlahX,jumlahO))
