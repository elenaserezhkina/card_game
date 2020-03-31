import React from "react";
import Card from "../Card";
import "./CardDeck.scss";

function CardDeck() {
  return (
    <div className="mainCardDeck">
      <Card />
      <Card />
    </div>
  );
}

export default CardDeck;
