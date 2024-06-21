import React from "react";
import { useState, useEffect } from "react";
import Bulba from "./bulba.jpg";
import Charmen from "./charmen.jpg";
import Mew from "./mew.jpg";
import Pickachu from "./pickachu.jpg";
import Title from './title.png'
import Sendaquil from "./sendaquil.jpg";
import Sqertel from "./sqertel.jpg";
import Totodile from "./totodile.jpg";
import Chiko from "./chiko.jpg";
import Card from "./Card";
import "./Memory.css";

const cardImages = [
  { matched: false, img: Mew },
  { matched: false, img: Totodile },
  { matched: false, img: Pickachu },
  { matched: false, img: Charmen },
  { matched: false, img: Sqertel },
  { matched: false, img: Chiko },
  {matched:false , img:Bulba},
  {matched:false , img:Sendaquil}
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setchoiceOne] = useState(null);
  const [choiceTwo, setchoiceTwo] = useState(null);
  const [disabled, setdisabled] = useState(false);
  // handle click

  // shuffle cards
  const shuffleCards = () => {
    const suffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setchoiceOne(null);
    setchoiceTwo(null)
    setCards(suffledCards);
    setTurns(0);
  };
  // handlechoice
  const handleChoice = (card) => {
    choiceOne ? setchoiceTwo(card) : setchoiceOne(card);
  };

  useEffect(() => {

    if (choiceOne && choiceTwo) {
      setdisabled(true)
      if (choiceOne.img === choiceTwo.img) {
        setCards((prevCard) => {
          return prevCard.map((card) => {
            if (card.img === choiceOne.img) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
       resetTurn();
      } else {
        console.log("not Matched");
        setTimeout(()=>resetTurn() , 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  console.log(cards);

  const resetTurn = () => {
    setchoiceOne(null);
    setchoiceTwo(null);
    setTurns((turns) => turns + 1);
    setdisabled(false)
  };


  // for starting the new Game 
  useEffect(() => {
    shuffleCards();
  }, [])


  return (
    <>
     <div className="parentmemory">
     <div className="memorCContainer">
     <div className="App">
        <h1>\</h1>
        <button onClick={shuffleCards}>New Game</button>

        <div className="card-grid">
          {cards.map((card) => (
            <Card key={card.id}
             card={card}
             handleChoice={handleChoice} 
             flipped={card === choiceOne || card === choiceTwo || card.matched}
             disabled={disabled}
             />
          ))}
        </div>
        <p className="turns">turns : {turns}</p>
        <img className="abs" src={Title} alt="" />
      </div>
     </div>
     </div>
    </>
  );
}

export default MemoryGame;
