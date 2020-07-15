import React, { useState, useEffect } from "react";
import axios from "axios";
import File from "./File";

// returns info of Atomic Habits by James Clear
function Atomic() {

  const [results, setResult] = useState(["Not yet found."]);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   axios.get('/atomic').then(response => {
  //     setResult(response.data);
  //     // console.log(response.data);
  //   });
  // }, []);

  function handleSearch() {
    console.log("clicked");
    axios.get('https://nameless-falls-09464.herokuapp.com/atomic', { crossdomain: true }).then(response => {
      setResult(response.data);
      // console.log(response.data);
    });
  };

  return (
    <div>
      <button onClick={handleSearch}>Search for Atomic Habits</button>
      <h1>Results returned by the search query: </h1>
      {results.map((result, index) => {
        return (
          <File 
            key={index}
            title={result.title}
            author={result.author}
            download={result.download}
          />
        );
      })}
    </div>
  );
}

export default Atomic;