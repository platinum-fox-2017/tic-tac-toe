function randomTicTacToe() {
	var randomFlag = Math.floor(Math.random() * 100) % 2,
		max_O = 0,
		max_X = 0,
		row = 3,
		column = 3,
		result = [];

	if (randomFlag == 1) {
		max_X = 5;
		max_O = 4;
	} else {
		max_X = 4;
		max_O = 5;
	}

	for (var i = 0; i < 3; i++) {
		var temp = [];
		for (var j = 0; j < 3; j++) {
			if (Math.floor(Math.random() * 100) % 2 == 1) {
				if (max_O > 0) {
					temp.push('O');
					max_O--;
				} else {
					temp.push('X');
					max_X--;
				}
			} else {
				if (max_X > 0) {
					temp.push('X');
					max_X--;
				} else {
					temp.push('O');
					max_O--;
				}
			}
		}
		result.push(temp);
	}

	return result;
}

console.log(randomTicTacToe());