import React, { useState } from "react";
import axios from "axios";
import File from "./File";
import InputArea from "./InputArea"
import LinearProgressWithLabel from "./LinearProgressWithLabel";

// returns info of Atomic Habits by James Clear
function Atomic() {

  const [results, setResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  // user option to use correction or not
  const [useAutocorrect, setUseAutocorrect] = React.useState(true);
  const [correctedQuery, setCorrectedQuery] = React.useState("");
  const [oldQuery, setOldQuery] = React.useState("");

  function handleSearch(query, prevQuery) {

    setCorrectedQuery(query);
    setOldQuery(prevQuery);
    setIsSearching(true);

    const queryUrl = 'https://nameless-falls-09464.herokuapp.com/' + query;
    // const queryUrl = 'http://localhost:5000/' + query;
    axios.get(queryUrl, { crossdomain: true }).then(response => {
      setResult(response.data);
      setIsSearching(false);
    });
  };

  return (
    <div>
      <InputArea 
        onSearch={handleSearch}
      />
      <div>
        
      <div hidden={(isSearching) ? false : true}>
          {isSearching && <LinearProgressWithLabel value={100} />}
      </div>
      <div hidden={!useAutocorrect || results.length === 0 || oldQuery === correctedQuery}>
        <p>Showing results for {correctedQuery}. {" "}
          <a onClick={(event) => {
            handleSearch(oldQuery, correctedQuery);
            event.preventDefault();
          }}
          href="">Show search results for {oldQuery} instead.</a>
        </p>
      </div>

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