import React from "react";

function File(props){
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Download: {props.download}</p>
      <hr></hr>
    </div>
  )
  
}

export default File;