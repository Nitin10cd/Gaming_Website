import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Demi from './Demi.jsx'
import Sudoku from './Sudoku/Sudoku.jsx'
import MemoryGame from './MemoryGame/MemoryGame.jsx'
import WhacktheMole from '../WhacktheMole/WhacktheMole.jsx'
import GamesCard from '../GamesCard.jsx'
import SnakeGame from './SnaakeGame/SnakeGame.jsx'
import TicTacToe from '../TicTacToe/TicTacToe.jsx'


const router = createBrowserRouter([
    {
        path:'/',
        element:<Demi/>,
        children:[
            {
                path:"",
                element:<App/>
            },
            {
                path:"sudoku",
                element:<Sudoku/>
            },
            {
                path:"whackthemole",
                element:<WhacktheMole/>
            },
            {
                path:"memory",
                element:<MemoryGame/>
            },
            {
                path:"snakegame",
                element:<SnakeGame/>
            },
            {
                path:"tictactoe",
                element:<TicTacToe/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
)
