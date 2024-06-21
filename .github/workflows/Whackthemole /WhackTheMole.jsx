import React from 'react'
import { useRef, useEffect, useState } from 'react';
import "./Mole.css"
import H from './h.jpg'
import Mole from './mole.png'
import Whackmole from "./whackmole.png"

const WhacktheMole = () => {

  // Hooks For The Management
  const [random, setRandom] = useState(0);
  const [score, setScore] = useState(0);
  const [chance, setChance] = useState(10);
  const [tracker, setTracker] = useState(0);
  const [imageCounter, setImageCounter] = useState(true);
  const buttonRef = useRef(null);

  // Function to hide the button
  const btnHide = () => {
    buttonRef.current.style.visibility = "hidden";
  }


  function subtractPoints(){
    setChance(prev => prev -1)
  }
  // HANDLING THE SCORE AND THE CHANCE
  const handleMoleClick = () => {
    if (imageCounter) {
      setScore(prev => prev + 5);
    } else {
      subtractPoints(); 
    }
    setImageCounter(!imageCounter);
  };
  

  // FUNCTION TO SHOW THE MOLES 
  function RandomChanges() {
    let variable = document.querySelectorAll(".divs");
    let varArray = Array.from(variable);

    setInterval(() => {
      let random = Math.floor(Math.random() * 9);
      varArray[random].style.transform = "translateY(0px)";
      varArray.forEach((e, index) => {
        if (index !== random) {
          e.style.transform = "translateY(125px)";
        }
      })

      varArray[random].addEventListener('click', handleMoleClick);
    }, 1000)
  }

  // Effect to start the mole animation on component mount
  useEffect(() => {
    RandomChanges();
  }, [buttonRef]);

  return (
    <>
      <div className="ParentofCh flex align-middle justify-center w-full h-full">
        <img className='image' src={Whackmole}/>
        <div className="GameContainer">
          <div className="GameBox grid grid-cols-3 ">
            {[...Array(9)].map((_, index) => (
              <div key={index}><img className='divs' src={Mole} /></div>
            ))}
          </div>
        </div>

        <button ref={buttonRef} onClick={()=>{(    btnHide())}}>Click</button>
        <div className="scores">
          <h1>Score: {score}</h1>
          <h1>Chance Left : {chance}</h1>
        </div>
        <img className='hammer' src={H} alt="" />
      </div>
    </>
  )
}

export default WhacktheMole;
