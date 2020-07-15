import React, { useState } from "react";
import axios from "axios";
import File from "./File";
import InputArea from "./InputArea"

// returns info of Atomic Habits by James Clear
function Atomic() {

  const [results, setResult] = useState(["Not yet found."]);

  function handleSearch(query) {
    console.log(query);
    const queryUrl = 'https://nameless-falls-09464.herokuapp.com/' + query;
    axios.get(queryUrl, { crossdomain: true }).then(response => {
      setResult(response.data);
    });
  };

  return (
    <div>
      <InputArea 
        onSearch={handleSearch}
      />
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