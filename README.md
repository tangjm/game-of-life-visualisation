# Conway's Game of Life
[![Netlify Status](https://api.netlify.com/api/v1/badges/ffa54a01-5ab3-4543-ac98-40c100b3e1fa/deploy-status)](https://app.netlify.com/sites/gameoflife-visualisation/deploys)

[Visit deployed app](https://gameoflife-visualisation.netlify.app/
)

![game of life example](./public/Gospers_glider_gun.gif)

The Game of life is a zero player game developed in the 70s by John Horton Conway. Check out the [wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) for a full description.
The evolving state of the game is determined by the initial configuration - some configurations become infinitely evolving constellations, others eventually evolve into a stable patterns, whilst others die off completely.

### The Brief

The rules are as follows:

* The game evolves in turns, commonly known as 'ticks'.
* All changes occur at the same time.
* Any live cell with 2 or 3 live neighbours survives until next tick.
* Any live cell with less than 2 live neighbours dies (underpopulation).
* Any live cell with more than 3 live neighbours dies (overpopulation).
* Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).

Write code that is capable of calculating each new generation, given a starter board. Although you don't have to build a visualisation tool to be able to see the evolution, it should be easy to extend the program to add on a web or command line ui.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
## Product backlog

[x] Only create 2 2d arrays and alternative between them rather than creating a new array for 
each iteration.
[x] Modify the board in-place
[x] Add a version that treats the board like a toroid
[x] Account for board edges
[] Account for the fact that the game board is infinite 


