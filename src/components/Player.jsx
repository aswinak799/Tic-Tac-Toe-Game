import React, { useState } from 'react';
const Player = ({initialName,symbol,isActive}) => {
    const [isEditing,setEditing] = useState(false)
    const [playerName,setPlayerName] = useState(initialName)
    function handleEdit(){
        setEditing(!isEditing)
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing){
        editablePlayerName = <input type='text' className="player-name" required value={playerName} onChange={handleChange}/>
    }


    return (
        <li className={isActive? 'active': undefined}>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing? 'save' : 'edit'}</button>
          </li>
    );
};

export default Player;
