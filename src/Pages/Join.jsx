import React from "react";
import "./Join.css";

//Get Code from user and verify
//Get Username from User
//dropdown for colors
function Join() {
  return (
    <main>
      <div id="codeContainer">
        <h1 id="joinLobby">Join Lobby</h1>
        <form>
          <input
            type="text"
            id="gameCode"
            name="number"
            maxlength="6"
            placeholder="Enter Lobby Code"
          />
        </form>
        <button id="enterGameBtn" type="submit">
          Enter Game
        </button>
      </div>
    </main>
  );
}

export default Join;
