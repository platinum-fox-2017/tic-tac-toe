function ticTac() {
  var simbol=['X','O'];
  var getTicTac=[];
  var countX=0;
  var countO=0;
  for(var i=0;i<3;i++) {
    getTicTac.push([]);
    for(var j=0;j<3;j++) {
      var getSimbol=simbol[Math.floor(Math.random() * simbol.length)];
      if(getSimbol==='X') {
        countX++;
      }
      else {
        countO++;
      }
      
      if(countX>5) {
        getSimbol='O';
      }
      else if(countO>5){
        getSimbol='X';
      }

      getTicTac[i].push(getSimbol);
      getSimbol='';
    }
  }
  return getTicTac;
}

console.log(ticTac())
