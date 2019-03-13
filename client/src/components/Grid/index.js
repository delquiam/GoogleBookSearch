import React from "react";



export const Container = ({children}) => {
  return(
    <main className="container">
      {children}
    </main>
  );
}


export const Row = ({children}) => {
  return(
    <div className="row">
      {children}
    </div>
  );
}

export const Col = ({children, size}) => {
  return(
    <div className={"col s" + size}>
      {children}
    </div>
  )
}