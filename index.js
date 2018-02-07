function ticTacToe() {
    var tic_tac_toe=[[],[],[]];
    var availableIndex=[0,1,2,3,4,5,6,7,8];
    for(var i=0; i<9; i++) {
        var index=Math.floor(Math.random()*(availableIndex.length));
        var row=availableIndex[index]%3;
        var col=Math.floor(availableIndex[index]/3);
        if(i%2===0) tic_tac_toe[col][row]='O';
        else tic_tac_toe[col][row]='X';
        availableIndex.splice(index,1);
    }
    return tic_tac_toe;
}

console.log(ticTacToe());