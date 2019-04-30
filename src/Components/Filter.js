import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  handleUserClick(option) {
    const l = new Array();
    const origin = new Array();
    const skus = Object.keys(this.props.products);

    skus.map(sku => {
      console.log(this.props.products[sku]);
      origin.push(this.props.products[sku]);
    });
    console.log(l);
    for (var i = 0; i < origin.length; i++) {
      var sizes = origin[i].size.split(" ");
      console.log(sizes);
      if (sizes.includes(option)) {
        l.push(origin[i]);
      }
    }
    this.props.applyFilter(l);
  }
  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.handleUserClick("XS");
            }}
          >
            XS
          </button>
          <button
            onClick={() => {
              this.handleUserClick("S");
            }}
          >
            S
          </button>
          <button
            onClick={() => {
              this.handleUserClick("M");
            }}
          >
            M
          </button>
          <button
            onClick={() => {
              this.handleUserClick("ML");
            }}
          >
            ML
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.handleUserClick("L");
            }}
          >
            L
          </button>
          <button
            onClick={() => {
              this.handleUserClick("XL");
            }}
          >
            XL
          </button>
          <button
            onClick={() => {
              this.handleUserClick("XXL");
            }}
          >
            XXL
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
