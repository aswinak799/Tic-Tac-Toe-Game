
const Gameboard = ({onSelectedSqure,board}) => {
    

    return (
        <ol id='game-board'>
            {
                board.map((row,index)=><li key={index}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=> <li key={colIndex}><button onClick={()=>onSelectedSqure(index,colIndex)} disabled={playerSymbol !==null}>{playerSymbol}</button></li>)}
                    </ol>

                </li>)
            }
        </ol>
    );
};


export default Gameboard;
