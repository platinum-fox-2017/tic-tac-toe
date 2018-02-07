function ticTacToe() {
    var arrTicTacBalikan = [];
    var counterX = 0;
    var counterO = 0;

    // while (counterX) {
        for(var i = 0; i < 3; i++) {
            var arrTicTac = [];
            for (var j = 0; j < 3; j++) {
                var tictac = Math.floor(Math.random() * 100);
                if (tictac % 2 == 0) {
                    if (counterX < 5) {
                        arrTicTac.push('x');
                        counterX = counterX + 1;
                    } else {
                        arrTicTac.push('o'); 
                    }
                } else {
                    if (counterO < 5) {
                        arrTicTac.push('o');
                        counterO = counterO + 1;
                    } else {
                        arrTicTac.push('x');
                    }
                }
            }
            arrTicTacBalikan.push(arrTicTac);
        }
    // }


    return arrTicTacBalikan;
}

console.log(ticTacToe());