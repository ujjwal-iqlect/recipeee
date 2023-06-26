import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import "./css/Search.css";
import { StepLabel } from "@material-ui/core";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  function submitHandler(event) {
    event.preventDefault();
    navigate(`/searched/${input}`);
    setInput("");
  }

  //Typed JS Functionality

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(".search", {
      strings: [
        "Search for Any Recipe",
        "Search for Chicken",
        "Search for Blueberry",
        "Search for Cookie",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      attr: "placeholder",
      loop: true,
    });
  }, []);

  return (
    <form onSubmit={submitHandler} className="search-form">
      <div>
        <FaSearch />
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder=""
          className="search"
        />
      </div>
    </form>
  );
}

export default Search;
