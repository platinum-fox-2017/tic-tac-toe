function createTictactoe() {
    let vocab = ['X', 'O'];
    let countX = 0;
    let countO = 0;
    let arr = [];

    for (let i = 0; i < 3; i++) {
        let temp = []
        for (let j = 0; j < 3; j++) {
            if (countX >= 5) {
                temp.push('O');
                countO++
            } else if (countO >= 4) {
                temp.push('X');
                countX++
            } else {
                if (Math.floor(Math.random() * 2) === 0) {
                    temp.push('X');
                    countX++
                } else {
                    temp.push('O');
                    countO++
                }
            }
        }
        arr.push(temp)
    }
    return arr
}

console.log(createTictactoe());

