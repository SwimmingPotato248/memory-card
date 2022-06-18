import React from "react";
import { Card } from "./components/Card";
import { images } from './images/index.js'

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        {images.map((image, i) => {
          console.log(image)
          return <Card src={image} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
