function createTicTacToe(){
  let ticTacToe = []
  for(var i = 0; i < 3; i++){
    ticTacToe.push([]);
  }
  var jumlahXGlobal = 0;
  var jumlahOGlobal = 0;
  for(var i = 0; i < ticTacToe.length ; i++){
    for(var r = 0; r < 3; r++ ){
      var text = randomXO();
      if(ticTacToe[i].length < 2 && i < 2){
        ticTacToe[i].push(text)  
      } else if(ticTacToe[i].length === 2 && i < 2) {
         let jumlahX = 0;
         let jumlahO = 0; 
         for(var j = 0; j < ticTacToe[i].length; j++){
             if(ticTacToe[i][j] === 'o'){
               jumlahO++;  
               jumlahOGlobal++;
             } 
             if(ticTacToe[i][j] === 'x'){
              jumlahX++;  
              jumlahXGlobal++;
             }
         } 
         if(jumlahX === 2){
          ticTacToe[i].push('o');  
         }
         if(jumlahO === 2){
          ticTacToe[i].push('x');  
         }
         if(jumlahX === 1 && jumlahO === 1){
          ticTacToe[i].push(text);  
         }
      } else {
        if(jumlahXGlobal === 5){
          text = 'o';
        }  else if(jumlahOGlobal === 5){
          text = 'x';  
        }
        ticTacToe[i].push(text);
      }
    }
  }
  return ticTacToe;
}
function randomXO(){
    let  possible = "xo";
    let  text = possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

console.log(createTicTacToe());
console.log(createTicTacToe());
