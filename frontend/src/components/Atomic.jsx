import React, { useState } from "react";
import axios from "axios";
import File from "./File";
import InputArea from "./InputArea"

// returns info of Atomic Habits by James Clear
function Atomic() {

  const [results, setResult] = useState([]);

  function handleSearch(query) {
    console.log(query);
    const queryUrl = 'https://nameless-falls-09464.herokuapp.com/' + query;
    // const queryUrl = 'http://localhost:5000/' + query;
    axios.get(queryUrl, { crossdomain: true }).then(response => {
      setResult(response.data);
    });
  };

  return (
    <div>
      <InputArea 
        onSearch={handleSearch}
      />
      <div>
        {/* <h1>Results returned by the search query: </h1> */}
        {results.map((result, index) => {
          return (
            <File 
              className="control-size"
              key={index}
              title={result.title}
              author={result.author}
              year={result.year}
              pages={result.pages}
              download={result.download}
              extension={result.extension}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Atomic;