class Board{
    constructor(){
        this.board = []
        this.answer = ['X','O']
        this.cordinat = []
        this.slot;
    }

    createBoard(p,l){
        this.slot = p * l
        for(let i = 0; i < p; i++){
            let column = []
            for(let j = 0;j < l; j++){
                column.push([])
                let cordinat = []
                cordinat.push(i)
                cordinat.push(j)
                this.cordinat.push(cordinat)
            }
            this.board.push(column)
        }
        return this.board
    }

    gameOn(){
        for(let i = 0; i < this.slot; i++){
            let index = this.generatePosition()
            let cordinat = this.cordinat[index]
            this.cordinat.splice(index,1)

            if(i % 2 ===0){
                this.board[cordinat[0]][cordinat[1]].push("X")
            }else{
                this.board[cordinat[0]][cordinat[1]].push("O")
            }
        }
        return this.board
    }

    convertBoard(){
        let newBoard = ''
        let boardbaru= ''
        for(let x = 0; x < this.board.length; x++){
            let boarderUpDown = ''
            for(let y = 0; y < this.board[x].length;y++){
                if(y === 0){
                    newBoard += this.board[x][y]
                }else{
                    newBoard += " | " + this.board[x][y]
                }
                boarderUpDown += "==="
            }
            boardbaru += newBoard + '\n'
            boardbaru += boarderUpDown + '\n'
            newBoard = ''
        }
        return boardbaru
    }

    generatePosition(){
        let position = Math.floor(Math.random() * this.cordinat.length)
        return position
    }
}

let release0 = new Board()

release0.createBoard(3,3)
release0.gameOn()
console.log(release0.convertBoard())