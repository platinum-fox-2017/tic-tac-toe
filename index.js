function ticTac(num){
  let result = []
  let total = num*num
  let average = Math.ceil(total/2)
  let word = ['X','O']
  //kotak
  for(let i = 0 ; i < num ; i++){
    result.push([])
  }

  let countX = 0
  let countO = 0
  for(let i = 0 ; i < num ; i++){
    for(let j = 0 ; j < num ; j++){
      let randomIndex = Math.round(Math.random())
      if(countO >= average ){
        result[i].push('X')
      }else if (countX >= average){
        result[i].push('O')
      }else {
        if(randomIndex === 0){
          result[i].push('X')
          countX ++
        }else if (randomIndex ===1){
          result[i].push('O')
          countO ++
        }
      }
    }
  }
  return result
}

console.log(ticTac(3))
console.log(ticTac(5))
