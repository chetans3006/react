import React from "react";

// Functional component with props
const Greet = (props) => {
  console.log(props); // logs the props object to console
  return (
    <h1>
      hello {props.name} a.k.a {props.heroname}
      {props.children}
    </h1>
  );
};

export default Greet;
