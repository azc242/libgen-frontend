import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';

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
    <div className="input-group mb-3">
      <form className="create-note">
        <input onChange={handleChange} value={query}></input>
        <button onClick={submitNote}>
            <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default InputArea;