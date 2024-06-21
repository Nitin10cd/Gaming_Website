import React, { useRef, useState, useEffect } from 'react';
import './Sudoku.css';

export default function Sudoku() {
    const [color , setColor] = useState('lightgreen');
    const [board, setBoard] = useState([
        [5, 3, '', '', 7, '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ]);
    const [count, setCount] = useState(10);
    const mistake = useRef(null);
    const correct = useRef(null);
    useEffect(() => {
        if (count === 0) {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }, [count])

    const newGame = () => { window.location.reload(); }
    // VALIDATION FUNCTION FOR THE GAME
    const validate = (value, row, col) => {
        // Check if value is a valid number between 1 and 9
        if (isNaN(value) || value < 1 || value > 9) {
            return false; // INVALID VALUE
        }

        //CHECK THE VALIDATION IN THE ROW
        for (let i = 0; i < 9; i++) {
            if (i !== col && board[row][i] === value) {
                return false;
            }
        }
        // FOR MATCHING IN THE 3x3 GRID
        const start_row = Math.floor(row / 3) * 3;
        const start_col = Math.floor(col / 3) * 3;
        for (let i = start_row; i < start_row + 3; i++) {
            for (let j = start_col; j < start_col + 3; j++) {
                if (i !== row && j !== col && board[i][j] === value) {
                    return false;
                }
            }
        }

        // CHECK THE DUPLICATE IN THE COLM
        for (let j = 0; j < 9; j++) {
            if (j !== row && board[j][col] === value) {
                return false; // Duplicate value in the same column
            }
        }

        return true;
    };

    const handleChange = (value, row, col) => {
        const newBoard = [...board];
        newBoard[row][col] = value;

        if (!validate(value, row, col)) {
            setCount(prevCount => prevCount - 1);
            console.log("Error: Invalid value entered or duplicate value.");
        } else {
            setBoard(newBoard);
        }
    };

    const DefaultColor =()=> {
        let a = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
      setColor(a)
    };
    return (
        <>
          <div className="sudokuParent">
          <div className="mainContainer">
                <div className='container'>
                    {board.map((row, rowIndex) => (
                        <div className='child' key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <input
                                    className='division'
                                    ref={mistake}
                                    type='number'
                                    value={cell || ''}
                                    key={colIndex}
                                    onChange={(e) => handleChange(parseInt(e.target.value), rowIndex, colIndex)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <p>Remaining Chances: {count}</p>
                <button onClick={newGame}>NewGame</button>
            </div>

          </div>
        </>
    );
      }
