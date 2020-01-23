import React from 'react';
import GameTitle from './GameTitle';
import GameLogic from './GameLogic';
import '../styles/game.css';

const App = () => {
    return (
        <div className="wrapper">
            <GameTitle />
            <GameLogic />
        </div>
    );
};

export default App;