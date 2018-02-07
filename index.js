const board = (number) => {
    let array = []
    for (let i = 0; i < number; i++) {
        array.push([])
        for (let j = 0; j < number; j++) {
            array[i].push([])
        }
    }
    return array
}

const tictac = (board) => {
    let possibleChar = 'xo'
    let counterx = 0
    let countero = 0
    // console.log(board[0].length)
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let xo = possibleChar.charAt(Math.random() * possibleChar.length)
            if (xo === 'x') {
                if (counterx < 5) {
                    board[i][j] = 'x'
                    counterx += 1
                } else {
                    board[i][j] = 'o'
                    countero += 1
                }
            } else if (xo === 'o') {
                if (countero < 5) {
                    board[i][j] = 'o'
                    countero += 1
                } else {
                    board[i][j] = 'x'
                    counterx += 1
                }
            }
        }
    }
    return board
}

let boardOfTictac = board(3)
console.log(tictac(boardOfTictac))