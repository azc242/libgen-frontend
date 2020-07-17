import React from "react";
import OutlinedCard from "./OutlinedCard";

function File(props){
  return (
    <div>
      <OutlinedCard 
      title={props.title}
      author={props.author}
      year={props.year}
      pages={props.pages}
      download={props.download}
      extension={props.extension}
      />
    </div>
  )
  
}

export default File;