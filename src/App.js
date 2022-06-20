import React, { useState } from "react";
import { Card } from "./components/Card";
import { images } from "./images/index.js";

function App() {
  const defaultGameElements = images.map((image) => {
    return { imageSrc: image, clicked: false };
  });
  const [gamePieces, setGamePieces] = useState(defaultGameElements);

  function handleClick(index) {
    const newGamePieces = [...gamePieces];
    if (newGamePieces[index].clicked === true) {
      setGamePieces(defaultGameElements);
      return
    }
    newGamePieces[index].clicked = true;
    shuffleArray(newGamePieces)
    setGamePieces(newGamePieces);
    
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
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
      <button onClick={() => console.log(gamePieces)}>Print game pieces</button>
      <div>{gamePieces.filter(piece => {
        return piece.clicked === true;
      }).length} Points</div>
    </div>
  );
}

export default App;
