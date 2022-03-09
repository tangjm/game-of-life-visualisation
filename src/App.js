
import GameOfLife from './js/GameOfLife';
import GameOfLifeToroid from './js/GameOfLifeToroid';
import startingPositions from './js/startingStates';
import './App.css';
import { colourSchemes } from './js/colourSchemes';
import { useState } from 'react';
import { Board } from './components/Board';


let timer;


const generateStartingPositions = () => {
  return Object.keys(startingPositions).map((position, index) => {
    return <option value={position} key={index}>
      {position}
    </option>
  })
}

const initialValue = startingPositions.defaultBoard.game;



// const useGameInfo = () => {
//   const [board, setBoard] = useState(startingPositions.defaultBoard.game.getBoard());
//   const [game, setGame] = useState(startingPositions.defaultBoard.game);
// }



function App() {
  const [stop, setStop] = useState(true);
  const [position, setPosition] = useState("defaultBoard");
  const [game, setGame] = useState(initialValue);
  const [board, setBoard] = useState(game.getBoard());

  const toggleSquare = (x, y) => {
    game.toggleLifeAndDeath(x, y);
    setBoard(board => game.getBoard());
  }

  const handleStart = () => {
    timer = setInterval(() => {
      game.nextIteration();
      setBoard(board => game.getBoard());
    }, 50);
  };

  const handleStop = () => {
    return clearInterval(timer);
  }

  const handleStartStop = () => {
    stop ? handleStart() : handleStop();
    setStop(stop => !stop);
  }

  const handleSelectPosition = e => {
    const newPosition = e.target.value;
    setPosition(position => newPosition);
    setGame(game => startingPositions[newPosition].game);
    setBoard(board => startingPositions[newPosition].game.getBoard());
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
          <select value={position} onChange={handleSelectPosition}>
            {
              generateStartingPositions()
            }
          </select>
          {/* <select value={colourTheme} onChange={handleColourThemeChange}>
            {
              Object.keys(colourSchemes).map((colour, index) => {
                return <option key={index} value={colour}>
                  {colour}
                </option>
              })
            }
          </select> */}
        </div>
      </header>
    </div>
  );
}

export default App;
