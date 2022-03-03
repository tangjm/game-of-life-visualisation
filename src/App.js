
import GameOfLife from './js/GameOfLife';
import GameOfLifeToroid from './js/GameOfLifeToroid';
import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';
import startingStates from './js/startingStates';
const gameNormal = new GameOfLife();
const gameToroid = new GameOfLifeToroid();

// let game = startingStates.acorn.gameToroid;
let game = startingStates.gospelGlider.game;
// let game = startingStates.rPentamino.gameInPlace;
// let game = startingStates.empty8x8.game;

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
      }, 100);
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
