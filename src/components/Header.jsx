import React from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import "./css/Header.css";

function Header() {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <GiKnifeFork />
        <Link to={`/`} className="main-logo">
          recipeee
        </Link>
      </div>
    </div>
  );
}

export default Header;
