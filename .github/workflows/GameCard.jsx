import React from 'react'
import { CardArray } from './Gamecard'
import { NavLink } from 'react-router-dom';
import Memory from './memory.jpg';
import Sudoku from './sudoku.jpg';
import Mole from './mole.jpg'
import Snakegaem from './snakegame.jpg'
import Ludo from './ludo.jpg'
import Sladder from './sladder.jpg'
import Game from './game.jpg'
import Whack from './WhacktheMole/whack.jpg'
export default function GamesCard() {

  // const Card = CardArray.map((data , index)=>(
  
  // ))

  return (
    <>
    <div className="cardContainer">
    <div className="cards">
      <img src={Snakegaem} alt="" />
    <label>Snake Game</label><br/>
    <button><NavLink to="/snakegame">Play Now</NavLink></button>
    </div>
    <div className="cards">
      <img src={Whack} alt="" />
    <label>Whack a Mole Game</label><br/>
    <button><NavLink to="/whackthemole">Play Now</NavLink></button>
    </div>
    <div className="cards">
      <img src={Game} alt="" />
    <label>Tic Tac Toe</label><br/>
    <button><NavLink to="/tictactoe">Play Now</NavLink></button>
    </div>
    <div className="cards">
      <img src={Sudoku} alt="" />
    <label>Sudoku Game</label><br/>
    <button><NavLink to="/sudoku">Play Now</NavLink></button>
    </div>
    <div className="cards">
      <img src={Memory} alt="" />
    <label>Memory Game</label><br/>
    <button><NavLink to="/memory">Play Now</NavLink></button>
    </div>
  
   
    </div>
    </>
  )
}
