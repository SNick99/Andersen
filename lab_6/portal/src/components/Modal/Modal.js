import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalApp = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.elem = document.createElement("div");
  }

  componentDidMount() {
    modalApp.appendChild(this.elem);
  }

  componentWillUnmount() {
    modalApp.removeChild(this.elem);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">{this.props.children}</div>,
      this.elem
    );
  }
}

export default Modal;
