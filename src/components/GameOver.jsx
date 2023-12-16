import React from 'react';


const GameOver = ({winner,onRestart}) => {
    return (
        <div id='game-over'>
            <h2>Game Over</h2>
            {winner && <p>{winner} Won</p> }
            {!winner && <p>{winner} It's a Draw!!!</p> }
            <p><button onClick={onRestart}>Restart!</button></p>
        </div>
    );
};



export default GameOver;
