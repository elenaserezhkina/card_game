import React from "react";
import CardDeck from "./onTheTable/CardDeck";
import PlaceToPlayCard from "./onTheTable/PlaceToPlayCard";
import DiscardDeck from "./onTheTable/DiscardDeck";
import "./Table.scss";

function Table() {
  return (
    <div className="TableWrapper">
      <CardDeck />
      <PlaceToPlayCard />
      <DiscardDeck />
    </div>
  );
}

export default Table;
