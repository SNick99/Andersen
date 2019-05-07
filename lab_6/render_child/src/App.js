import React from "react";
import Panel from "./components/Panel/Panel";
import PanelBody from "./components/PanelBody/PanelBody";
import PanelHeader from "./components/PanelHeader/PanelHeader";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false,
    };

    this.onShowPanel = () => {
      this.setState({
        showPanel: !this.state.showPanel,
      });
    };
  }

  render() {
    return (
      <Panel>
        <PanelHeader onShowPanel={this.onShowPanel}>
          <div>Hello</div>
        </PanelHeader>
        <PanelBody showPanel={this.state.showPanel}>
          <div>World</div>
        </PanelBody>
      </Panel>
    );
  }
}

export default App;
