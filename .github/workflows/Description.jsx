import React from 'react'
import Remote11  from "./remote12.png"
import "./src/Description.css"
const Description = () => {
  return (
   <>
   
   <div className="DescParent">
    <div className="DescImg">
        <img src={Remote11}/>
    </div>
    <div className="Description">
        <h2>
            A Gaming Website
        </h2>
        <p>HyperGames Gaming Website Based On React and Core js Logic Here You can play a several Games For free
            we offer to play a simple Games like currently Available Games like Whack a mole , sudoku , Memory Game , 
            TicTacToe , At your Free time.....
        </p>
    </div>
   </div>
   </>
  )
}

export default Description
