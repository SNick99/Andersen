import React from "react";
import "./App.css";
import "./components/DropDown/DropDown";
import DropDown from "./components/DropDown/DropDown";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import BodyComponent from "./components/BodyComponent/BodyComponent";
function App() {
  return (
    <div className="App">
      <DropDown
        renderHeader={handle => <HeaderComponent handleToggle={handle} />}
        renderBody={openShow => <BodyComponent open={openShow} />}
      />
    </div>
  );
}

export default App;
