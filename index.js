function ticTacToe(num) {
    var tic_tac_toe=[];
    var usedIndex=[];
    for(var x=0; x<num; x++) tic_tac_toe.push([]);
    console.log(tic_tac_toe)
    for(var i=0; i<Math.pow(num,2); i++) {
        var index=Math.floor(Math.random()*(Math.pow(num,2)));
        if(usedIndex.indexOf(index)!==-1) {
            while(usedIndex.indexOf(index)!==-1){
                index=Math.floor(Math.random()*(Math.pow(num,2)));
            }
        }
        usedIndex.push(index);
        var row=index%num;
        var col=Math.floor(index/num);
        if(i%2===0) tic_tac_toe[col][row]='O';
        else tic_tac_toe[col][row]='X';
    }
    return tic_tac_toe;
}

console.log(ticTacToe(5));