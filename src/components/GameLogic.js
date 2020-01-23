import React, {useState, useEffect} from 'react';
import GameView from './GameView';

const defaultValues = {
    1: { value: 'hidden', icon: '1' },
    2: { value: 'hidden', icon: '2' },
    3: { value: 'hidden', icon: '3' },
    4: { value: 'hidden', icon: '4' },
    5: { value: 'hidden', icon: '5' },
    6: { value: 'hidden', icon: '6' },
    7: { value: 'hidden', icon: '7' },
    8: { value: 'hidden', icon: '8' },
    9: { value: 'hidden', icon: '9' }
};

const GameLogic = () => {
    const [sign, setSign] = useState('times');
    const [hideEffect, setHideEffect] = useState({...defaultValues});
    const [winner, setWinner] = useState('');
    const [clickedCells, setClickedCells] = useState(0);

    const onLiClick = (e) => {
        if (winner) {} 
        else if (hideEffect[e.target.value].value) {
            setHideEffect({ ...hideEffect, [e.target.value]: { value: '', icon: sign} });
            setSign(sign === 'times' ? 'circle outline' : 'times');
            setClickedCells(clickedCells + 1);
        } else if (clickedCells < 9){
            alert('Select another cell!');
        }
    };

    const onIconClick = (e) => {
        if (winner) {}
        else {
            e.stopPropagation();

            if (clickedCells < 9) alert('Select another cell!');
        }
    };

    const onButtonClick = () => {
        setSign('times');
        setHideEffect({...defaultValues});
        setWinner('');
        setClickedCells(0);
    };

    const getGameResult = (valuesObject) => {
        console.log('hi');
        const numbersForCheck = [
            [1, 2, 3],
            [1, 4, 7],
            [1, 5, 9],
            [2, 5, 8],
            [3, 6, 9],
            [3, 5, 7],
            [4, 5, 6],
            [7, 8, 9]
        ];

        for (let i = 0; i < 8; i++) {
            let [first, second, third] = numbersForCheck[i];

            if (valuesObject[first].icon === valuesObject[second].icon &&
                valuesObject[first].icon === valuesObject[third].icon) {
                    setWinner(`${sign === 'times' ? 'circle outline' : 'times'}`);
            }
        }
    };

    useEffect(() => getGameResult(hideEffect), [sign]);

    return (
        <GameView 
            onLiClick={onLiClick}
            onIconClick={onIconClick}
            hideEffect={hideEffect}
            clickedCells={clickedCells}
            winner={winner}
            sign={sign}
            onButtonClick={onButtonClick}
        />
    );
};

export default GameLogic;