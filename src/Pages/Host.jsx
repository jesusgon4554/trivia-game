import React, { useState, useEffect } from "react";
import "./Host.css";

import PlayerCard from "../Components/PlayerCard";
import Footer from "../Components/Footer.jsx";
import CategoryOption from "../Components/CategoryOption";

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
  const [userCategory, setUserCategory] = useState({
    categoryName: "",
    categoryId: null,
  });
  // const [displayUserCategory, setDisplayUserCategory] = useState();
  const [gameParams, setGameParams] = useState({
    param1: "",
    param2: "",
    param3: "",
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
  });
  // this state will be initialized with the return from a call to backend which will provide a randomly generated lobby code
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
        const dataArr = data.trivia_categories.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

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

  // function getCatOptionBtns() {
  //   const categoryOptionBtnArr =
  //     document.querySelectorAll(".categoryOptionBtn");
  //   console.log(categoryOptionBtnArr);
  //   return categoryOptionBtnArr;
  // }

  function renderCategoryBtns() {
    return triviaCategories.length > 0 ? (
      triviaCategories.map((cat) => (
        <CategoryOption
          key={cat.id}
          categoryName={cat.name}
          categoryId={cat.id}
          setUserCategory={setUserCategory}
          userCategory={userCategory}
        />
      ))
    ) : (
      <p>Loading Categories...</p>
    );
  }

  return (
    <main>
      <div id="host">
        {/* H1 GAME CODE  generate a single use code*/}
        {/* <button onClick={getTrivia}>GET TRIVIA</button> */}
        <p id="codeGenBtn" onClick={() => setGameCode(gameCodeVal())}>
          Click here for New Code
        </p>
        <div id="playerCardContainer">
          <div id="createGameCode">
            <p>
              Lobby Code: <span id="loadedCode">{gameCode}</span>
            </p>
          </div>

          {/* titles/colors will be grabbed from backend */}
          <PlayerCard id="username" username="Player 1" color="coral" />
          <PlayerCard id="username2" username="Player 2" />
          <PlayerCard id="username3" username="Player 3" />
          <PlayerCard id="username4" username="Player 4" />
        </div>

        <div id="createGameSettings">
          {/* <button className="gamemodeBtn">Classic</button> */}
          {/* <button className="gamemodeBtn">Fast Mode</button> */}
            
            <div id="gameParamsContainer">
            <h3 className="hostHeading">Game Parameters</h3>
              {/* questions, points, timer */}
              <button class="gameMode">Classic</button> 
              {/* Less time, more points */}
              <button class="gameMode">Aggresive</button>
              {/* lots of questions, lots of time, little points */}
              <button class="gameMode">Marathon</button>
     
            <h3 className="hostHeading">Categories</h3>
            <div id="gameCategoriesContainer">
              
              <p>
                {" "}
                {userCategory.categoryName} {userCategory.categoryId}{" "}
              </p>
              {renderCategoryBtns()}
            </div>
            </div>
        </div>

        <button id="startGameBtn">Start Game</button>
      </div>
      <Footer />
    </main>
  );
}

export default Host;
