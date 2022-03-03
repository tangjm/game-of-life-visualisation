class GameOfLifeInPlace {
    // using a single 2d array and mutating it in-place
    // Current | Next | State
    //    1    |  1   |   1
    //    1    |  0   |   2
    //    0    |  1   |   3
    //    0    |  0	  |	  0
    constructor(rows, columns) {
        this.rows = rows || 3;
        this.columns = columns || 3;
        this.board = Array(rows).fill(0).map(row => {
            return Array(columns).fill(0);
        })
        this.neighbours = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],            [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];
    }

    toggleLifeAndDeath(x, y) {
        this.board[x][y] = 1;
    }

    getBoard() {
        return this.board.slice();
    }

    nextIteration() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let liveNeighbours = this.getLiveNeighbours(i, j);
                if (this.board[i][j]) {
                    if (liveNeighbours < 2 || liveNeighbours > 3) {
                        this.board[i][j] = 2;
                    }
                } else if (liveNeighbours === 3) {
                    this.board[i][j] = 3;
                }
            }
        }
        this.updateBoard();
    }

    getLiveNeighbours(i, j) {
        let liveNeighbours = 0;
        for (let [x, y] of this.neighbours) {
            x += i; 
            y += j;
            if (x < 0 || y < 0 || x >= this.rows || y >= this.columns) continue;
            if (this.board[x][y] % 3) liveNeighbours++;
        }
        return liveNeighbours;
    }

    updateBoard() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.board[i][j] %= 2;
            }
        }
    }
}

export default GameOfLifeInPlace;