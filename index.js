function tictactoe(){
  let arr = []
  let kamus = ['x','o']
  let countx = 0
  let counto = 0
  for(let i = 0;i<3;i++){
    arr.push([])
    for(let j=0;j<3;j++){
      let random = Math.round(Math.random())
      if(countx >= 5){
        arr[i].push('o')
      } else if(counto >= 5){
        arr[i].push('x')
      } else{
        arr[i].push(kamus[random])
        if(random === 0){
          countx++
        } else {
          counto++
        }
      }
    }
  }
  return arr
}

console.log(tictactoe());
