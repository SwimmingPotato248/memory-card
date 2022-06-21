import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { images } from "./images/index.js";
import "./styles/App.css";

function App() {
  const defaultGameElements = images.map((image) => {
    return { imageSrc: image, clicked: false };
  });
  const [gamePieces, setGamePieces] = useState(defaultGameElements);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(index) {
    const newGamePieces = [...gamePieces];
    if (newGamePieces[index].clicked === true) {
      setGamePieces(defaultGameElements);
      setScore(0)
      return;
    }
    newGamePieces[index].clicked = true;
    shuffleArray(newGamePieces);
    setGamePieces(newGamePieces);
    setScore(score + 1);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  },[score, highScore])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="board">
        {gamePieces.map((element, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                handleClick(i);
              }}
            >
              <Card src={element.imageSrc} handleClick={handleClick} />
            </div>
          );
        })}
      </div>
      <h4>Points: {score}</h4>
      <h4>High Score: {highScore}</h4>
    </div>
  );
}

export default App;
