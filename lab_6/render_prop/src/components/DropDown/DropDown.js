import React from "react";
import "./DropDown.css";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div className="dropDown">
        {this.props.renderHeader(this.handleToggle)}

        {this.state.open ? this.props.renderBody(this.state.open) : null}
      </div>
    );
  }
}

export default DropDown;
