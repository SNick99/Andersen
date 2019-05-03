import React from "react";
import "./App.css";
import Modal from "./components/Modal/Modal.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        Hello, I modal.
        <button onClick={this.handleHide}>Hide modal</button>
      </Modal>
    ) : null;

    return (
      <div className="app">
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
