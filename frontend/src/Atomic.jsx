import React, { useState } from "react";

// returns info of Atomic Habits by James Clear
function Atomic() {

  const [results, setResulta] = useState([]);

  return (
    <div>
      <button>Search for Atomic Habits</button>
      <h1>Here are the results returned by the search query: {results}</h1>
    </div>
  )
}

export default Atomic;