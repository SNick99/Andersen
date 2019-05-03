import React from "react";
import "./BodyComponent.css";

const array = ["1", "2", "3", "4", "5"];

let BodyComponent = props => {
  return (
    <div className="bodyComponent">
      <ul>
        {array.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BodyComponent;
