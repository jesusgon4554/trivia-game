import React from "react";
import "./Host.css";

import PlayerCard from "../Components/PlayerCard";
//category Select
//User- Select what categories you want your rivals to be quizzed on
//DEV - Map the categories from the API to be rendered on the screen for user to see

//Heading = Header Game Code
//Players Joined
//Settings
//Start Game

function Host() {
  return (
    <main id="host">
      <h1 id="pageHeader">Create Game</h1>
      {/* H1 GAME CODE  generate a single use code*/}
      <h1 id="gameCode">Lobby Code: 696969</h1>

      <div id="playerCardContainer">
        {/* titles/colors will be grabbed from backend */}
        <PlayerCard id="username" username="NIG" color="coral" />
        <PlayerCard id="username2" username="Player 2" />
        <PlayerCard id="username3" username="Player 3" />
        <PlayerCard id="username4" username="Player 4" />
      </div>
      <div id="createGameSettings">
        <button className="gamemodeBtn">Classic</button>
        <button className="gamemodeBtn">Fast Mode</button>
      </div>

      <button id="startGameBtn">Start Game</button>
    </main>
  );
}

export default Host;
