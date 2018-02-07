function tictac (input){
  var hasil = []
  var nilaiX = 0
  var nilaiO = 0
  var random = Math.round(Math.random())

  for(var i=0; i<input; i++){
    var arrTemp = []
    for(var j=0; j<input; j++){
      if(nilaiX <= input){
        nilaiX++
        arrTemp.push('O')
        debugger
      }
      else if(nilaiO <= input){
        nilaiO++
        arrTemp.push('X')
      }
      else{
        if(random === 1){
          nilaiX++
          arrTemp.push('X')
        }
        else if(random === 0){
          nilaiO++
          arrTemp.push('O')
        }
      }
    }
    hasil.push(arrTemp)
  }
  return hasil
}

console.log(tictac(3))
