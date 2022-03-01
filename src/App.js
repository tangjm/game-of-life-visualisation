import GameOfLife from './js/GameOfLife';
import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';

const game = new GameOfLife(30, 70);

// game set up
game.toggleLifeAndDeath(1, 1);
game.toggleLifeAndDeath(1, 2);
game.toggleLifeAndDeath(1, 3);

console.log(game.getBoard())

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [board, setBoard] = useState(game.getBoard());

  const toggleSquare = (x, y) => {
    game.toggleLifeAndDeath(x, y);
    setBoard(board => game.getBoard());
  }

  const startGame = () => {
    game.nextIteration();
  };

  const handleStartStop = () => {
    // if (isPlaying) {
    //   clearInterval(startGame);
    // } else {
    //   startGame();
    // }
    // setIsPlaying(isPlaying => !isPlaying);
    startGame();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <Board gameboard={board} toggleSquare={toggleSquare} />
          </div>
          <button onClick={handleStartStop}>Start/Stop</button>
        </div>
      </header>
    </div>
  );
}

export default App;
