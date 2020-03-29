import React, { useEffect, useState } from "react";
import Card from "./Card";

//c04c3563-7191-4ef9-8128-5fbce011a533

// https://api.thecatapi.com/v1/images/search

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
