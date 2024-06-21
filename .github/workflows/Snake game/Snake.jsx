import React, { useState, useEffect } from 'react';
import './Snake.css';

const SnakeGame = () => {
    const [score, setScore] = useState(0);
    const [foodx, setFoodx] = useState(0);
    const [foody, setFoody] = useState(0);
    const [snakex, setSnakex] = useState(10);
    const [snakey, setSnakey] = useState(10);
    const [velocityx, setVelocityx] = useState(0);
    const [velocityy, setVelocityy] = useState(0);
    const [snakeBody, setSnakeBody] = useState([[snakex, snakey]]);


    const randomLocation = () => {
        let a = Math.floor(Math.random() * 30) + 1;
        let b = Math.floor(Math.random() * 30) + 1;
        setFoodx(a);
        setFoody(b);
    };


    const changePosition = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (velocityy !== 1) {
                    setVelocityx(0);
                    setVelocityy(-1);
                }
                break;
            case 'ArrowDown':
                if (velocityy !== -1) {
                    setVelocityx(0);
                    setVelocityy(1);
                }
                break;
            case 'ArrowRight':
                if (velocityx !== -1) {
                    setVelocityx(1);
                    setVelocityy(0);
                }
                break;
            case 'ArrowLeft':
                if (velocityx !== 1) {
                    setVelocityx(-1);
                    setVelocityy(0);
                }
                break;
            default:
                break;
        }
    };


    useEffect(() => {
        const moveSnake = () => {
            // Move the snake
            const newSnakeX = snakex + velocityx;
            const newSnakeY = snakey + velocityy;

            // Check if snake eats the food
            if (newSnakeX === foodx && newSnakeY === foody) {
                randomLocation();
                setScore(score + 1);
                // Add new segment to snake's body
                let newSnakeBody = [...snakeBody];
                newSnakeBody.unshift([newSnakeX, newSnakeY]);
                setSnakeBody(newSnakeBody);
            } else {
                // Update snake's body
                let newSnakeBody = [...snakeBody];
                newSnakeBody.pop(); // Remove last segment
                newSnakeBody.unshift([newSnakeX, newSnakeY]); // Add new segment at the front
                setSnakeBody(newSnakeBody);
            }

            // Check for collision with walls or itself
            if (newSnakeX < 1 || newSnakeX > 30 || newSnakeY < 1 || newSnakeY > 30 || isSnakeCollision(newSnakeX, newSnakeY)) {
                // Handle game over logic here
                alert("Game Over. Your Score: " + score);
                resetGame();
            } else {
                // Update snake position
                setSnakex(newSnakeX);
                setSnakey(newSnakeY);
            }
        };

        const gameInterval = setInterval(moveSnake, 100); // Adjust speed of the game

        return () => clearInterval(gameInterval);
    }, [snakex, snakey, foodx, foody, velocityx, velocityy]);

    // Function to check if snake collides with itself
    const isSnakeCollision = (x, y) => {
        for (let i = 1; i < snakeBody.length; i++) {
            if (snakeBody[i][0] === x && snakeBody[i][1] === y) {
                return true;
            }
        }
        return false;
    };

    // Function to reset the game
    const resetGame = () => {
        setScore(0);
        setFoodx(0);
        setFoody(0);
        setSnakex(10);
        setSnakey(10);
        setVelocityx(0);
        setVelocityy(0);
        setSnakeBody([[10, 10]]);
        randomLocation();
    };

    // Effect to handle key press events
    useEffect(() => {
        const handleKeyPress = (e) => {
            changePosition(e);
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    // Effect to initialize game and place food
    useEffect(() => {
        randomLocation();
    }, []);

    // JSX for rendering the game board and UI
    return (
        <div className="SnakeParent">
            <div className="wrapper">
                <div className="gameDetails">
                    <span className="score">Score: {score}</span>
                </div>
                <div className="playBoard">
                    {/* Render snake's body */}
                    {snakeBody.map((segment, index) => (
                        <div key={index} className="snake" style={{ gridArea: `${segment[1]} / ${segment[0]}` }}></div>
                    ))}
                    {/* Render food */}
                    <div className="food" style={{ gridArea: `${foody} / ${foodx}` }}></div>
                </div>
            </div>
        </div>
    );
};

export default SnakeGame;
