import React, { useState } from "react";
import "./App.css"; // Import CSS file for styling

const XDictionar = () => {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTermLower
    );

    setSearchResult(
      foundWord ? foundWord.meaning : "Word not found in the dictionary."
    );
  };

  return (
    <div className="container">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="result-container">
        <p class="para">Definition:</p>
        <p>{searchResult}</p>
      </div>
    </div>
  );
};

export default XDictionar;