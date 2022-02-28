class GameOfLife {
	constructor(rows, columns) {
		this.rows = rows || 3;
		this.columns = columns || 3;
		this.board = Array(this.rows).fill(0)
			.map(row => Array(this.columns).fill(0));
	}

	toggleLifeAndDeath(x, y) {
		this.board[x][y] = 1;
	}

	getRows() {
		return this.rows;
	}

	getColumns() {
		return this.columns;
	}

	getBoard() {
		return this.board;
	}

	nextIteration() {
		let nextBoardState = this.board.slice();
		for (let i = 0; i < this.board.length; i++) {
			for (let j = 0; j < this.board[i].length; j++) {
				const newLifeAndDeathState = this.determineLifeAndDeath(i, j);
				nextBoardState[i][j] = Number(newLifeAndDeathState);
			}
		}
		this.board = nextBoardState;
	}

	isAlive(x, y) {
		return Boolean(this.board[x][y]);
	}

	centreLives(x, y) {
		// adjacent squares in clockwise order
		let a, b, c, d, e, f, g, h;
		a = this.isAlive(x - 1, y - 1);
		b = this.isAlive(x - 1, y);
		c = this.isAlive(x - 1, y + 1);
		d = this.isAlive(x, y + 1);
		e = this.isAlive(x + 1, y + 1);
		f = this.isAlive(x + 1, y);
		g = this.isAlive(x + 1, y - 1);
		h = this.isAlive(x, y - 1);

		let adjacentSquares = [a, b, c, d, e, f, g, h];
		let liveNeighbours = 0;
		for (let i = 0; i < adjacentSquares.length; i++) {
			if (adjacentSquares[i]) {
				liveNeighbours++;
			}
		}

		if (liveNeighbours === 3) return true;
		if (this.isAlive(x, y) && liveNeighbours === 2) return true;
		return false;
	}

	sideLives(x, y) {
		let a, b, c, d, e;
		// top side
		if (x === 0) {
			a = this.isAlive(x, y - 1);
			b = this.isAlive(x, y + 1);
			c = this.isAlive(x + 1, y - 1);
			d = this.isAlive(x + 1, y);
			e = this.isAlive(x + 1, y + 1);
		}

		// right side
		if (y === this.board.length - 1) {
			a = this.isAlive(x - 1, y - 1);
			b = this.isAlive(x - 1, y);
			c = this.isAlive(x + 1, y);
			d = this.isAlive(x + 1, y - 1);
			e = this.isAlive(x, y - 1);
		}

		// bottom side 
		if (x === this.board.length - 1) {
			a = this.isAlive(x - 1, y - 1);
			b = this.isAlive(x - 1, y);
			c = this.isAlive(x - 1, y + 1);
			d = this.isAlive(x, y + 1);
			e = this.isAlive(x, y - 1);
		}

		// left side 
		if (y === 0) {
			a = this.isAlive(x - 1, y);
			b = this.isAlive(x - 1, y + 1);
			c = this.isAlive(x, y + 1);
			d = this.isAlive(x + 1, y + 1);
			e = this.isAlive(x + 1, y);
		}

		let adjacentSquares = [a, b, c, d, e];
		let liveNeighbours = 0;
		for (let i = 0; i < adjacentSquares.length; i++) {
			if (adjacentSquares[i]) {
				liveNeighbours++;
			}
		}

		if (liveNeighbours === 3) return true;
		if (this.isAlive(x, y) && liveNeighbours === 2) return true;
		return false;
	}

	cornerLives(x, y) {
		let a, b, c;
		// top left corner
		if (x === 0 && y === 0) {
			a = this.isAlive(x, y + 1);
			b = this.isAlive(x + 1, y + 1);
			c = this.isAlive(x + 1, y);
		}

		// top right corner
		if (x === 0 && y !== 0) {
			a = this.isAlive(x, y - 1);
			b = this.isAlive(x + 1, y - 1);
			c = this.isAlive(x + 1, y);
		}

		// bottom left corner
		if (x !== 0 && y === 0) {
			a = this.isAlive(x - 1, y);
			b = this.isAlive(x - 1, y + 1);
			c = this.isAlive(x, y + 1);
		}

		// bottom right corner
		if (x !== 0 && y !== 0) {
			a = this.isAlive(x, y - 1);
			b = this.isAlive(x - 1, y - 1);
			c = this.isAlive(x - 1, y);
		}

		if (a && b && c) return true;

		if (this.isAlive(x, y)) {
			if (a && b && !c) return true;
			if (a && !b && c) return true;
			if (!a && b && c) return true;
		}

		return false;
	}

	determineLifeAndDeath(x, y) {
		// determine if <i, j> is a corner, side or centre square
		// and invoke the corresponding function
		if (this.isCorner(x, y)) {
			return this.cornerLives(x, y);
		}

		if (this.isSide(x, y)) {
			return this.sideLives(x, y);
		}

		if (this.isCentre(x, y)) {
			return this.centreLives(x, y);
		}
	}

	isCorner(x, y) {
		if (x !== 0 && x !== this.board.length - 1) return false;
		if (y !== 0 && y !== this.board.length - 1) return false;
		return true;
	}

	isSide(x, y) {
		if (this.isCorner(x, y)) return false;
		if (x === 0 || x === this.board.length - 1) return true;
		if (y === 0 || y === this.board.length - 1) return true;
		return false;
	}

	isCentre(x, y) {
		return !this.isCorner(x, y) && !this.isSide(x, y);
	}
}

export default GameOfLife;