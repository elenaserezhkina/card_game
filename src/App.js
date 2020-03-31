import React from "react";
import "./App.css";
import TellYourName from "./Pages/TellYourName";
import GetCard from "./Components/GetCard";
import CreateGame from "./Pages/CreateGame";
import GamePage from "./Pages/GamePages/GamePage";

function App() {
  return (
    <div className="App">
      {/* <GetCard /> */}
      {/* <TellYourName /> */}
      {/* <CreateGame /> */}
      <GamePage />
    </div>
  );
}

export default App;
