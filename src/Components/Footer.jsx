import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer id="foot">
      <Link to="/">
        <p>
          TRIVIA<span id="name">SMASH</span>
        </p>
      </Link>
    </footer>
  );
}

export default Footer;
