function createNestedArray(){
    let oCounter = 0;
    let xCounter = 0;

    while(oCounter !== xCounter-1){
        var result = [];
        let letters = 'xo';
        for(let i=0; i<3; i++){
            let row = [];
            for(let j=0; j<3; j++){
                let randomCharacter = letters.charAt(Math.floor(Math.random() * letters.length));
                row.push(randomCharacter);
            }
            result.push(row);
        }
        for(let i=0; i<result.length; i++){
            for(let j=0; j<result[i].length; j++){
                if(result[i][j]==='o'){
                    oCounter += 1;
                }else if(result[i][j]==='x'){
                    xCounter += 1;
                }
            }
        }
    }

    return result;
}

console.log(createNestedArray());