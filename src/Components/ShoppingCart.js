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
  countTotal() {
    var total = 0;
    for (var i in this.props.shoppedItem) {
      total +=
        parseFloat(this.props.shoppedItem[i][0]) *
        parseFloat(this.props.shoppedItem[i][1]);
    }
    console.log(total);
    return total;
  }
  render() {
    const names = Object.keys(this.props.shoppedItem);
    return (
      <div style={{ display: "inline-block" }}>
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
                    <button onClick={() => this.props.removeItem(product)}>
                      x
                    </button>
                  </Dropdown.Item>
                );
              })}
              <Dropdown.Item style={{ fontSize: 25 }}>
                Total:{this.countTotal()}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </div>
    );
  }
}

export default ShoppingCart;
