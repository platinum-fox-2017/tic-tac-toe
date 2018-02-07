//Release 0

let tic_tac_toe = () => {
    let randomXorO = () => {
        let random = Math.round(Math.random());
        if(random === 1){
            return 'X';
        } else if (random === 0){
            return 'O';
        }
    }
    let checkXorO = (input) => {
        input.forEach((item) => {
            if(item === 'X'){
                countX ++;
            } else if (item === 'O'){
                countO ++;
            }
        })
    }
    let countX =0;
    let countO =0;
    let outside =[];
    let inside =[];
    for(let i=0; i<3; i++){
        outside.push(inside);
        for(let j=0; j<3; j++){
            let current_values = (outside.toString().split(','));
            checkXorO(current_values);
            if(countX === 5){
                outside[i].push('O');
            } else if (countO === 5){
                outside[i].push('X');
            } else {
                outside[i].push(randomXorO());
            }
            countX = 0;
            countO = 0;
        }
        inside =[];
    }
    return (outside);
}

console.log(tic_tac_toe());