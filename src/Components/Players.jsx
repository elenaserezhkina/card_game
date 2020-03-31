import React from "react";
import EachPlayer from "./EachPlayer";
import "./Players.scss";

function Players() {
  return (
    <div className="allOponents">
      <EachPlayer />
      <EachPlayer />
      <EachPlayer />
    </div>
  );
}

export default Players;
