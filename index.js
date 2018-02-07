function ticTacToe(jumlahRow, jumlahCol){
  var abjad = 'xo';
  var ticTac = [];
  for(var i=0; i<jumlahRow; i++){
    var arr = [];
    for(var j=0; j<jumlahCol; j++){
      var isi = abjad[Math.floor((Math.random()*2))];
      arr.push(isi);
    }
    ticTac.push(arr);
  }
  var count = 0;
  for(var k=0; k<ticTac.length; k++){
    for(var h=0; h<ticTac[k].length; h++){
      if(ticTac[k][h]==='x'){
        count++;
      }
    }
  }
  if(count===4 || count===5){
    return ticTac;
  } else {
    return ticTacToe(jumlahRow, jumlahCol);
  }
}

console.log(ticTacToe(3,3));
