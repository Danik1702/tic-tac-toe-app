import React from 'react';
import '../styles/game.css';

const GameView = (props) => {
    let {onLiClick, onIconClick, onButtonClick, hideEffect, clickedCells, winner, sign} = props;

    const renderList = () => {
        const helperArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        return helperArray.map((el, index) => {
            return (
                <li onClick={onLiClick} key={index} value={index + 1}>
                    <i 
                        onClick={onIconClick} 
                        className={`huge ${hideEffect[index + 1].icon} icon ${hideEffect[index + 1].value}`} 
                    />
                </li>
            );
        });
    };

    const renderWinner = () => {
        if (clickedCells === 9 && !winner) {
            return 'No one won..';
        }

        return winner ? 'is the winner!' : 'turn';
    };

    return (
        <div className="desk">
            <div className="move-container">
                <h4 className="move">
                    <i className={`${clickedCells === 9 && !winner ? '' : winner || sign} icon`} 
                /> {renderWinner()}</h4>
            </div>
            <div className="border">
                <ul className="list">
                    {renderList()}
                </ul>
            </div>
            <div className="regame" >
                <button onClick={onButtonClick}>
                    Play again
                </button>
            </div>
        </div>
    );
};

export default GameView;