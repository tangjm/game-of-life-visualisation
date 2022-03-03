
import GameOfLife from './js/GameOfLife';
import GameOfLifeToroid from './js/GameOfLifeToroid';
import startingStates from './js/startingStates';
import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';

let game = startingStates.defaultBoard.game;
game = startingStates.glider.gameToroid;
// let game = startingStates.acorn.gameToroid;
// game = startingStates.gospelGlider.gameInPlace;
// let game = startingStates.rPentamino.game;
// let game = startingStates.empty8x8.game;
// let game = startingStates.pufferfish.gameToroid;

let timer; 

function App() {
  const [stop, setStop] = useState(true);
  const [board, setBoard] = useState(game.getBoard());

  const toggleSquare = (x, y) => {
    game.toggleLifeAndDeath(x, y);
    setBoard(board => game.getBoard());
  }

  const handleStart = () => {
      timer = setInterval(() => {
        game.nextIteration();
        setBoard(board => game.getBoard());
      }, 100);
  };

  const handleStop = () => {
    return clearInterval(timer);
  }

  const handleStartStop = () => {
    stop ? handleStart() : handleStop();
    setStop(stop => !stop);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Conway's Game of Life</h2>
          <div>
            <Board gameboard={board} toggleSquare={toggleSquare} />
          </div>
          <button onClick={handleStartStop}>
            {stop ? "Start" : "Stop"}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
