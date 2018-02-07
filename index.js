function createTTT(jumlahRow,jumlahCol) {

    var hasilTTT = [];
    var scoreX = 0; // posisi 0
    var scoreO = 0; // posisi 1

    for (var i = 0; i < jumlahRow; i++) {
        hasilTTT.push([]);
        for (var j = 0; j < jumlahCol; j++) {
            var alphabet = 'XO';

            var angkaRandom = Math.round(Math.random()*1);
            debugger

            if (angkaRandom == 0) {
                scoreX += 1;
            } else {
                scoreO += 1;
            }
            debugger

            if (scoreX > 5) {
                hasilTTT[i].push('O');
            } else if (scoreO > 5) {
                hasilTTT[i].push('X');
            } else {
                hasilTTT[i].push(alphabet[angkaRandom]);
            }
            debugger
        }
    }

    return hasilTTT;
    
}

console.log(createTTT(3,3));

/*
TRYOUT bikin hasil random seimbang

var hasil = [];

scoreO = 0;
for (var i = 0; i < 9; i++) {
    debugger
    if (scoreO < 5) {
        hasil.push(0);
        scoreO += 1;
        debugger
    } else {
        hasil.push(1);
        debugger
    }
    debugger
}

console.log(hasil);
*/