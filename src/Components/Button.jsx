import React from "react";
import "./Button.css";

function Button({ id, className, title, onclickFct }) {
  return (
    // <div id="buttonContainer">
    <button onClick={onclickFct} id={id} className={className}>
      {title}
    </button>
    // </div>
    // {/* <button id="gameButton2">Join Lobby</button> */}
  );
}

export default Button;
