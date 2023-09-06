import React from "react";
import "./PlayerCard.css";

function PlayerCard({ id, username, color }) {
  return (
    <div id={id} className="playerCard" style={{ backgroundColor: color }}>
      {username}
    </div>
  );
}

export default PlayerCard;
