import React, { useState, useEffect } from "react";
import "./Host.css";

import PlayerCard from "../Components/PlayerCard";
import Thing from "../Components/Thing";
// import CategorySelect from "../Components/CategorySelect.jsx";

//category Select
//User- Select what categories you want your rivals to be quizzed on
//DEV - Map the categories from the API to be rendered on the screen for user to see

//Heading = Header Game Code
//Players Joined
//Settings
//Start Game

function Host() {
  const [triviaCategories, setTriviaCategories] = useState([]);
  const [userCategory, setUserCategory] = useState();
  const [gameParams, setGameParams] = useState({});
  const [gameCode, setGameCode] = useState(gameCodeVal());

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://trivia-quiz-questions-api.p.rapidapi.com/api_category.php",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "96f08c6256msh06a5acd536381b6p15e965jsne34a53ad1902",
              "X-RapidAPI-Host": "trivia-quiz-questions-api.p.rapidapi.com",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch trivia data");
        }

        const data = await response.json();
        const dataArr = data.trivia_categories;
        console.log(dataArr);
        // console.log(dataArr.sort());
        setTriviaCategories(dataArr);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //NODE JS WORK
  //assign passcode in server to individual session
  //make an array of active session codes to check if generated code is being used
  function gameCodeVal() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passcode = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      passcode += characters.charAt(randomIndex);
    }
    return passcode;
  }

  return (
    <main>
      <h1 id="gameCode">Lobby Code {gameCode}</h1>

      <div id="host">
        <button onClick={() => setGameCode(gameCodeVal())}>
          New Game Code
        </button>
        {/* H1 GAME CODE  generate a single use code*/}
        {/* <button onClick={getTrivia}>GET TRIVIA</button> */}

        <div id="playerCardContainer">
          {/* titles/colors will be grabbed from backend */}
          <PlayerCard id="username" username="Player 1" color="coral" />
          <PlayerCard id="username2" username="Player 2" />
          <PlayerCard id="username3" username="Player 3" />
          <PlayerCard id="username4" username="Player 4" />
        </div>
        <div id="createGameSettings">
          {/* <button className="gamemodeBtn">Classic</button> */}
          {/* <button className="gamemodeBtn">Fast Mode</button> */}
          <div>
            <h3>Game Parameters</h3>
            <div id="gameParamsContainer">
              <button>P1</button>
              <button>P2</button>
              <button>P3</button>
              <button>P4</button>
              <button>P5</button>
              <button>P6</button>
              <button>P7</button>
              <button>P8</button>
            </div>
          </div>
          <div id="gameCategoriesContainer">
            <h3>Categories</h3>
            <p> {userCategory} </p>
            <div>
              {triviaCategories.length > 0 ? (
                triviaCategories.map((cat) => (
                  <Thing
                    key={cat.id}
                    categoryName={cat.name}
                    categoryId={cat.id}
                    setUserCategory={setUserCategory}
                  />
                ))
              ) : (
                <p>Loading Categories...</p>
              )}
            </div>
          </div>
        </div>

        <button id="startGameBtn">Start Game</button>
      </div>
    </main>
  );
}

export default Host;
