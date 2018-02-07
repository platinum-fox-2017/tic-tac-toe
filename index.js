const ticTacToe = (row,col)=>{
    const xo = 'xo'
    let arrayTable = []
    let totalX = 0
    let totalO = 0
    for(let i =0;i<row;i++){
        arrayTable.push([])
        for(let j=0;j<col;j++){
            let random = Math.floor(Math.random()*xo.length)
            arrayTable[i].push(xo[random])
            if(arrayTable[i][j]==='x'){
                totalX++
            }
            if(arrayTable[i][j]==='o'){
                totalO++
            }
            if(totalX>5){
                arrayTable[i][j]='o'
            }
            if(totalO>5){
                arrayTable[i][j]='x'
            }
        }
    }
    return arrayTable
}

console.log(ticTacToe(3,3))