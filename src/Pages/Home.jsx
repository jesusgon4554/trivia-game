import React from "react";
import { useNavigate } from "react-router-dom";

//components
import Button from "../Components/Button.jsx";

//css
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  function handleCreateGame() {
    navigate("/host");
  }
  function handleJoinLobby() {
    navigate("/join");
  }

  return (
    <main>
      <h1 id="logo">
        TRIVIA<span id="name">SMASH</span>
      </h1>
      <div className="buttonContainer">
        <Button
          onclickFct={handleCreateGame}
          id="createGameBtn"
          title="Create Game"
        />
        <Button
          onclickFct={handleJoinLobby}
          id="joinLobbyBtn"
          title="Join Lobby"
        />
      </div>
      <h3 id="disc">Discord</h3>
    </main>
  );
}

export default Home;
