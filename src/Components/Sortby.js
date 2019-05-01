import React, { Component } from "react";
import {
  ButtonToolbar,
  Button,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

class Sortby extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: "inline-block", "padding-left": "600px" }}>
        <DropdownButton title="Order By">
          <Dropdown.Item onClick={() => this.props.LowToHigh()}>
            Lowest to Highest
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.props.HighToLow()}>
            Highest to Lowest
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default Sortby;
