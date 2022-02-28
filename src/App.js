import GameOfLife from './js/GameOfLife';
import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';

const game = new GameOfLife();

// game set up
game.toggleLifeAndDeath(1, 1);
game.toggleLifeAndDeath(1, 2);
game.toggleLifeAndDeath(2, 2);

console.log(game.getBoard())
const startGame = () => {
  game.nextIteration();
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartStop = () => {
    if (isPlaying) {
      clearInterval(startGame);
    } else {
      startGame();
    }
    setIsPlaying(isPlaying => !isPlaying);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <div>
          <Board gameboard={game.getBoard()} />
        </div>
        <button onClick={handleStartStop}>Start/Stop</button>
      </div>
      </header>
    </div>
  );
}

export default App;
