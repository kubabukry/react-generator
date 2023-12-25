import React from "react";
import trollface from "../images/troll-face.png";
import "../App.css";

export default function Header() {
  return (
      <header className="header">
        <img className="header--image" src={trollface} alt="troll face"/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React learning project</h4>
      </header>
  )
}