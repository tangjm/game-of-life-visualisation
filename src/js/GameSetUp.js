class GameSetUp {

	square(game, topLeftPair) {
		// if <n, m> is the top-left corner:
		// then <n, m>, <n, m + 1>, <n + 1, m>, <n + 1, m + 1>
		// together make a 2x2 square.
		
		let square = Array(4);
		square[0] = [...topLeftPair];
		square[1] = [topLeftPair[0], topLeftPair[1] + 1];
		square[2] = [topLeftPair[0] + 1, topLeftPair[1]];
		square[3] = [topLeftPair[0] + 1, topLeftPair[1] + 1];

		square.forEach(coord => {
			game.toggleLifeAndDeath(...coord);
		})
	}
}

export default GameSetUp;