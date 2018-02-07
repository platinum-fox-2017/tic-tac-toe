function tictactoe(){
    const isi = ['O', 'X'];
    let result = [];
    let countO = 0;
    let countX = 0;
    
    for (let i = 0; i < 3; i++){
        result.push([]);
        for (let j = 0; j < 3; j++){
            let randomIsi = isi[Math.round(Math.random())];
            
            if (countO === 5 || countX === 5) break;
            result[i].push(randomIsi);
            (result[i][j] === 'X')? countX++: countO++;
            if (countO === 5 || countX === 5) break;
        }
    }
    let remainingPair = (countX === 5)? 'O': 'X';
    let countIsi = 2;

    while(countIsi >= 0){
        while(result[countIsi].length < 3){
            result[countIsi].push(remainingPair);
        }
        countIsi--;
    }
    return result;
}

console.log(tictactoe())