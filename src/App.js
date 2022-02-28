import GameOfLife from './js/gameOfLife';
import './App.css';
import {  useState } from 'react';

const game = new GameOfLife();
const startGame = setInterval(() => {
  game.nextIteration();
}, 2000);

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

      </header>
      <div>
        <div>
          
        </div>
        <button onClick={handleStartStop}>Start/Stop</button>
      </div>
    </div>
  );
}

export default App;
