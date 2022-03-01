import GameOfLife from './js/GameOfLife';
import StartingPosition from './js/GameSetUp';
import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';

const game = new GameOfLife(32, 70);
// 32x50 default board size
// game set up
// game.toggleLifeAndDeath(1, 1);
// game.toggleLifeAndDeath(1, 2);
// game.toggleLifeAndDeath(1, 3);
const initialPosition = new StartingPosition();
initialPosition.beacon(game, [1, 1]);



function App() {
  const [stop, setStop] = useState(true);
  const [board, setBoard] = useState(game.getBoard());
  const [startStopHandler, setStartStopHandler] = useState(``);

  const toggleSquare = (x, y) => {
    game.toggleLifeAndDeath(x, y);
    setBoard(board => game.getBoard());
  }

  const handleStart = () => {
    setStartStopHandler(startStopHandler => {
      return setInterval(() => {
        game.nextIteration();
        setBoard(board => game.getBoard());
      }, 500);
    });
  };

  const handleStop = () => {
    return clearInterval(startStopHandler);
  }

  const handleStartStop = () => {
    stop ? handleStart() : handleStop();
    setStop(stop => !stop);
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
