import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🐵": "Monkey",
  "🐶": "Dog",
  "🐱": "Cat",
  "🐼": "Panda",
  "🦄": "Unicorn",
  "🐷": "Pig"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;

    var meaning = emojiDictionary[emojiInput];

    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "Sorry! We couldn't find that in our Database.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>What's that Animal?</h1>
      <h4>Put the Animal emoji below :</h4>
      <textarea
        placeholder="Enter Emoji here.."
        onChange={emojiInputHandler}
      ></textarea>
      <strong>
        <p style={{ fontSize: "1.5rem" }}>{meaning}</p>
      </strong>

      <h3>Click on any of the emoji below</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
      {""}
      {""}
      {""}
      <p style={{ fontSize: "medium" }}>Checkout my other Projects : </p>
      <a
        style={{
          textDecoration: "none",
          padding: "0.3rem",
          border: "2px solid black",
          borderRadius: "0.3rem",
          color: "white",
          backgroundColor: "Black"
        }}
        href="https://ritikmangtani-portfolio.netlify.app/projects.html"
      >
        Browse Projects
      </a>
    </div>
  );
}
// {emojiInput}
