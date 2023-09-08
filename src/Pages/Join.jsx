import React from "react";
import "./Join.css";
import Footer from "../Components/Footer";
import ColorSelector from "../Components/ColorSelector";

//Get Code from user and verify
//Get Username from User
//dropdown for colors
function Join() {
  return (
    <main>
      <div id="codeContainer">
        <h1 id="joinLobby">Join Lobby</h1>
        <form id="inputContainer">
          <input
            type="text"
            id="usernameInput"
            name="userName"
            maxlength="8"
            placeholder="Enter Username"
          />

          <input
            type="text"
            id="gameCodeInput"
            name="number"
            maxlength="6"
            placeholder="Enter Lobby Code"
          />
        </form>
        <div>
          <ColorSelector />
        </div>
        <button id="enterGameBtn" type="submit">
          Enter Game
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default Join;
