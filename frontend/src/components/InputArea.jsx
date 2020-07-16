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
    <div>
      <form className="create-note">
        <input onChange={handleChange} value={query}></input>
        <button onClick={submitNote}>
          <div style={{
            marginTop: 5
          }}>
            <SearchIcon />
          </div>
        </button>
      </form>
    </div>
  )
}

export default InputArea;