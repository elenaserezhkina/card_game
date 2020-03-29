import React, { useState } from "react";
import ChooseDeck from "../img/chooseDeck.svg";
import "./CreateGame.css";

function CreateGame() {
  const [deckOfCards, setDeckOfCards] = useState("");

  return (
    <div>
      <div>
        <img className="imageHeader" src={ChooseDeck} alt="choose your deck" />
      </div>
      <div className="chooseDeckWrap">
        <div
          className={`chooseDeckButton ${deckOfCards === "numbers" &&
            "activeButton"}`}
          onClick={() => setDeckOfCards("numbers")}
        >
          1 - 99
        </div>
        <div
          className={`chooseDeckButton cardsImage ${deckOfCards === "durak" &&
            "activeButton"}`}
          onClick={() => setDeckOfCards("durak")}
        ></div>
      </div>
      <button className="createGameButton">Create New Game</button>
    </div>
  );
}

export default CreateGame;
