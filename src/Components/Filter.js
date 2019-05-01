import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  handleUserClick(option) {
    if (option == "all") {
      this.props.applyFilter(this.props.products);
    } else {
      const l = new Array();
      const origin = new Array();
      const skus = Object.keys(this.props.products);

      // skus.map(sku => {
      //   //origin.push(this.props.products[sku]);
      //   origin[sku] = this.props.products[sku];
      // });
      console.log(skus);
      for (var i = 0; i < skus.length; i++) {
        origin[skus[i]] = this.props.products[skus[i]];
      }
      console.log(origin);
      for (var j = 0; j < skus.length; j++) {
        var sizes = origin[skus[j]].size.split(" ");
        console.log(sizes);
        if (sizes.includes(option)) {
          l[skus[j]] = origin[skus[j]];
        }
      }
      console.log(l);
      this.props.applyFilter(l);
    }
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
          <button
            onClick={() => {
              this.handleUserClick("all");
            }}
          >
            All
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
