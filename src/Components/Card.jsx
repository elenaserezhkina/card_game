import React from "react";
import "./Card.scss";

function Card({ photoUrl }) {
  return (
    <div className="cardContainer">
      <div className="topSign">7 &#10084;</div>
      <div>
        <img className="middlePicture" src={photoUrl} />
      </div>
      <div className="bottomSign">7 &#10084;</div>
    </div>
  );
}

export default Card;
