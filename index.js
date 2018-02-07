function ticTacToe(num) {
  let firstArr = []
  let ox = 'XO'
  let pointO = 0
  let pointX = 0
  for (var i = 0; i < num; i++) {
    let secondArr = []
    for (var j = 0; j < num; j++) {
      var randomize = Math.round(Math.random())
      if (pointO >= 5) {
        pointX++
        secondArr.push('X')
      }
      else if (pointX >= 5) {
        pointO++
        secondArr.push('O')
      }
      else {
        if (randomize === 0) {
          pointX++
          secondArr.push('X')
        }
        else if (randomize === 1) {
          pointO++
          secondArr.push('O')
        }
      }
    }
    firstArr.push(secondArr)
  }
  return firstArr
}

console.log(ticTacToe(3));
