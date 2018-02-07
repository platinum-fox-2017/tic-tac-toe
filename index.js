let tictac = (row, col) => {
    let arr = [];
    var countX = 0;
    var countO = 0;

    for (let i = 0; i < row; i++) {
        let tempArr = [];
        for (let j = 0; j < col; j++) {
            let randomize = Math.round(Math.random());
            if (countO == 5) {
                tempArr.push('x');
                countX += 1;
            } else if (countX == 5) {
                tempArr.push('o');
                countO += 1;
            } else {
                if (randomize === 0) {
                    tempArr.push('o');
                    countO += 1;
                } else {
                    tempArr.push('x');
                    countX += 1;;
                }
            }
        }
        arr.push(tempArr);
    }
    return arr
}

console.log(tictac(3, 3));