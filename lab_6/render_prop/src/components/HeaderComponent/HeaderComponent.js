import React from "react";
import "./HeaderComponent.css";

let HeaderComponent = props => {
  return (
    <div className="headerComponent">
      <button onClick={props.handleToggle}>Header component</button>
    </div>
  );
};

export default HeaderComponent;
