import React from "react";
import Table from "../../Components/Table";
import Players from "../../Components/Players";
import "./GamePage.scss";
import MyCards from "../../Components/MyCards/MyCards";

function GamePage() {
  return (
    <div className="GameWrapper">
      <Players />
      <Table />
      <MyCards />
    </div>
  );
}

export default GamePage;
