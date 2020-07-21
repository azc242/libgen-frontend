import React, {useState} from "react";
import misspellings from "misspellings";
import contractions from "./contractions";
import SearchIcon from '@material-ui/icons/Search';
const MicroSpellingCorrecter = require('micro-spelling-correcter');
 
const contractionList = contractions.contractions;

function InputArea(props) {
  // useState for query
  const [query, setQuery] = useState("");

  // corrector for contractions
  let correcter = new MicroSpellingCorrecter(
    contractionList,
    2
  );
  
  // checks for misspellings by splitting query into individual words and checking each individual word
  function checkSpelling(str) {
    const arr = str.split(" ");
    for(var i = 0; i < arr.length; i++){
      if(correcter.correct(arr[i]) !== undefined){
        arr[i] = correcter.correct(arr[i]);
      }
    }

    // join words back into string
    const sol = arr.join(" ");
    setQuery(sol);
    return sol;
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function submitQuery(event){
    console.log("before: " + query);
    // check for contractions
    var correctedSpelling = checkSpelling(query);

    // check for common misspellings
    correctedSpelling = misspellings.correct(correctedSpelling);
    setQuery(correctedSpelling);

    props.onSearch(correctedSpelling);

    // prevent page refresh
    event.preventDefault();
  }

  return(
    <div className="input-group mb-3">
      <form className="create-note">
        <input onChange={handleChange} value={query}></input>
        <button onClick={submitQuery}>
            <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default InputArea;