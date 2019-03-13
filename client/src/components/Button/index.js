import React from "react";

export const Button = (props) => {
  return(
    <button onClick={props.handleClickEvent} className={"btn waves-effect waves-light " + props.colors}>
      {props.children}
    </button>
  );
}

export const Button2 = (props) => {
  return(
    <a href={props.link} target="_blank" rel="noopener noreferrer" className={"btn waves-effect waves-light " + props.colors}>
      {props.children}
    </a>
  );
}