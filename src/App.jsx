import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningCombination";
import GameOver from "./components/GameOver";
var initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function derivePlayer(turns){
  let currentPlayer = 'X'
  if( turns.length > 0 && turns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns,setGameTurns] = useState([]);

  function handleActivePlayer(rowIndex,colIndex){
    setGameTurns((prevTurns)=>{
      let currentPlayer = derivePlayer(prevTurns);
      const updatedTurns = [{ squre:{row: rowIndex, col:colIndex}, player: currentPlayer },...prevTurns]
      return updatedTurns;
    })
  }

  let gameBoard = [...initialGameBoard.map(innerArray=> [...innerArray])];
    for(const turn of gameTurns){
        const { squre, player } = turn;
        const { row, col } = squre;
        gameBoard[row][col] = player;
    }
    
    let winner = null;
    for(const combination of WINNING_COMBINATIONS){
      const firstSqureSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSqureSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSqureSymbol = gameBoard[combination[2].row][combination[2].column];
      if (firstSqureSymbol && firstSqureSymbol === secondSqureSymbol && firstSqureSymbol === thirdSqureSymbol) {
        winner = firstSqureSymbol;
      }
  }
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart(){
    setGameTurns([])
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="X" isActive={derivePlayer(gameTurns)==='X'}/>
          <Player initialName="player2" symbol="O" isActive={derivePlayer(gameTurns)==='O'}/>

        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gameboard 
        onSelectedSqure={handleActivePlayer}
        board={gameBoard}
        />
      </div>
        <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
