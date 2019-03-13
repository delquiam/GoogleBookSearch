import React from "react";
// import "./style.css";

export const List = ({children, header}) => {
  return(
    <ul className="collection  blue lighten-2 blue lighten-2 text-darken-4">
      <li className="collection-header"><h4>{header}</h4></li>
      {children}
    </ul>
  );
}

export const ListItem = ({children}) => {
  return(
    <li className="collection-item  blue lighten-2 text-darken-4">
      {children}
    </li>
  );
}