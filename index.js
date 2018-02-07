'use strict'

const ticTacToe = dim => {
    const bank = 'XO';
    var result = [];
    let countX = 0;
    let countO = 0;
    for (var i = 0; i < dim; i++) {
        result.push([]);
        for (let j = 0; j < dim; j++) {
            result[i].push(bank.charAt(Math.floor((Math.random() * bank.length))));
            if (result[i][j] === 'X') {
                countX++;
            } else if (result[i][j] === 'O') {
                countO++;
            }
            if (countX > 5) {
                result[i][j] = 'O';
            } else if (countO > 5) {
                result[i][j] = 'X';
            }
        }
    }
    return result;
}

var dimension = 3;
console.log('<<<<<<<<<<<<<<<<<<<');
console.log(ticTacToe(dimension));
