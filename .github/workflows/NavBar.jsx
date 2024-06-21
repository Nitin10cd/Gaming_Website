import React from "react";
import "./NavBar.css"
import Remote22 from "./remote11.png"
const NavBar = () => {
  return (
    <nav className=" bg-purple-950">
      <ul>
        <img className="sideImage" src={ Remote22}/>
        <h1><span>H</span>yperGames</h1>
      </ul>
      <input type="search"/>
      <ul>
        <h2>Games</h2>
        <h2>Connect</h2>
      </ul>
    </nav>
  );
};

export default NavBar;
