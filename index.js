function tictactoe(){
  var papan=[[],[],[]]
  var x=0,o=0,lose=''
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      var angka=Math.floor(Math.random() * Math.floor(2))
      if(lose === ''){
        if(angka===1){
          papan[i].push('X')
          x++
        }else{
          papan[i].push('O')
          o++
        }
        if(x===5){
          lose='O'
        }
        else if(0===5){
          lose='X'
        }
      }else{
        papan[i].push(lose)
      }
    }
  }
  console.log(papan)
}

tictactoe()
