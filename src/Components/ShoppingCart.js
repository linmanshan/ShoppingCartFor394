import React, { Component } from "react";
import {
  ButtonToolbar,
  Button,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const names = Object.keys(this.props.shoppedItem);
    console.log(names);
    return (
      <ButtonToolbar>
        <Dropdown>
          <Dropdown.Toggle style={{ width: 150 }}>Cart</Dropdown.Toggle>
          <Dropdown.Menu>
            {names.map(product => {
              return (
                <Dropdown.Item key={product}>
                  <div>Name:{product}</div>
                  <div>Price:{this.props.shoppedItem[product][0]}</div>
                  <div>Quantity:{this.props.shoppedItem[product][1]}</div>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    );
  }
}

export default ShoppingCart;
