const ticTacToe = () =>{
    let ticTacToeArr =[];
    let countX = 0;
    let countO = 0;
    let xo = 'XO'; 
    for(let i=0; i<3; i++){
        let arr=[]
        for(let j=0; j<3; j++){
            let element = xo[Math.floor(Math.random()*2)]
            element === 'X' ? countX++ : countO++
            countO > 5 ? element = 'X' : ''
            countX > 5 ? element = 'O' : ''
            arr.push(element)
        }
        ticTacToeArr.push(arr)
    }
    return ticTacToeArr
}

console.log(ticTacToe())