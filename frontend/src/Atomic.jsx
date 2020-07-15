import React, { useState, useEffect } from "react";
import axios from "axios";

// returns info of Atomic Habits by James Clear
function Atomic() {

  const [results, setResult] = useState([]);

  // useEffect(() => {
  //   axios.get('/atomic').then(response => {
  //     setResult(response.data);
  //     // console.log(response.data);
  //   });
  // }, []);

  function handleSearch() {
    console.log("clicked");
    axios.get('http://nameless-falls-09464.herokuapp.com/atomic').then(response => {
      setResult(response.data);
      // console.log(response.data);
    });
  };

  return (
    <div>
      <button onClick={handleSearch}>Search for Atomic Habits</button>
      <h1>Here are the results returned by the search query: </h1>
      {results.map(result => {
        return (
          <div>
          <p>Title: {result.title}</p>
          <p>Author: {result.author}</p>
          <p>Download: {result.download}</p>
          <hr></hr>
        </div>
        );
      })}
    </div>
  );
}

export default Atomic;