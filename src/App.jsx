import "./App.css";

import Home from "./Pages/Home";

function App() {
  function getTrivia() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.map((data) => {
          if (data.category === "music") {
            console.log(data);
          }
        });
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
