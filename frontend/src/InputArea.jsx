import React, {useState} from "react";

function InputArea(props) {

  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function submitNote(event){
    props.onSearch(query);
    event.preventDefault();
  }

  return(
    <div>
      <form>
        <input onChange={handleChange} value={query}></input>
        <button onClick={submitNote}>Search</button>
      </form>
    </div>
  )
}

export default InputArea;