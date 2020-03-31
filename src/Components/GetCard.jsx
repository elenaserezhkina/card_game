import React, { useEffect, useState } from "react";
import Card from "./Card";

///context

function GetCard() {
  const [cats, setCats] = useState();

  console.log(cats);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(result => {
        setCats(result[0].url);
        console.log(result[0].url + "here");
      });
  }, []);
  console.log(cats + "and here");

  return (
    <div>
      <Card photoUrl={cats} />
    </div>
  );
}

export default GetCard;
