import React from "react";
import "./style.css";

function Title(props) {
  return(
    <div>
      <span className="badge badge-secondary title"><h1>{props.children}</h1></span>
    <br/>
    </div>
  ) 
}
export default Title;