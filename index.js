function tic_tac_toe(){
    var isian = 'xo';

    // kolom
    var x=1;
    var countO = 0;
    var countX = 0;
    for(var i=1; i<=3; i++){
        var wrap = [];
        for(var j=1; j<=3; j++){
            var randomXo = isian[Math.floor(Math.random()*isian.length)];
            if(randomXo === 'x'){
                if(countX < 5){
                    wrap.push('x');
                    countX++;
                } else {
                    wrap.push('o');
                    countO++;
                }
            } else if(randomXo === 'o'){
                if(countO <= 4){
                    wrap.push('o');
                    countO++;
                } else {
                    wrap.push('x');
                    countX++;
                }
            }
        }
        console.log(wrap);
    }
    console.log(countX);
}


console.log(tic_tac_toe([1][1])); // true