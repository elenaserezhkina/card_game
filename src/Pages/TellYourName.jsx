import React, { useState } from "react";
import "./TellYourName.css";

function TellYourName() {
  const [userName, setUsername] = useState("");

  function mySubmitHandler(event) {
    event.preventDefault();
    console.log(userName);
  }

  return (
    <div className="nameForm">
      <div onSubmit={mySubmitHandler}>
        <h1>Tell us your name</h1>
        {userName && <h3>Hello {userName}</h3>}
        <div>
          <input
            type="text"
            name="username"
            onChange={event => setUsername(event.target.value)}
          ></input>
        </div>
        <button className="joinGameButton" type="submit" value="Submit">
          Join
        </button>
      </div>
    </div>
  );
}

export default TellYourName;
