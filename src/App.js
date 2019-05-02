import React, { Component } from "react";
import { Button, CardColumns, Card, Container } from "react-bootstrap";
import ShoppingCart from "./Components/ShoppingCart";
import Filter from "./Components/Filter";
import Sortby from "./Components/Sortby";

// const App = ({products}) => {
//   const skus = Object.keys(products);
//   const items = skus.map(sku => <li>{products[sku].title}</li>);
//   return (<ul>{items}</ul>
// );

// };
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppedItem: new Array(),
      showProducts: this.props.products
    };
    this.applyFilter = this.applyFilter.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.LowToHigh = this.LowToHigh.bind(this);
    this.HighToLow = this.HighToLow.bind(this);
  }

  applyFilter(showProducts) {
    this.setState({ showProducts: showProducts });
  }
  handleUserClick(item) {
    //[price,quantity,pic]
    let shoppedItem = this.state.shoppedItem;
    for (var key in shoppedItem) {
      if (item.title === key) {
        shoppedItem[key][1] += 1;
        this.setState({ shoppedItem: shoppedItem });
        return;
      }
    }
    shoppedItem[item.title] = [item.price, 1];
    this.setState({ shoppedItem: shoppedItem });
  }
  removeItem(item) {
    const items = this.state.shoppedItem;
    delete items[item];
    this.setState({ shoppedItem: items });
  }

  LowToHigh() {
    const result = new Array();
    const dic = this.state.showProducts;
    const sdic = Object.keys(dic).sort(function(a, b) {
      return parseFloat(dic[a].price) - parseFloat(dic[b].price);
    });
    for (var i = 0; i < sdic.length; i++) {
      result[sdic[i]] = this.state.showProducts[sdic[i]];
    }
    this.setState({ showProducts: result });
  }

  HighToLow() {
    const result = new Array();
    const dic = this.state.showProducts;
    const sdic = Object.keys(dic).sort(function(a, b) {
      return parseFloat(dic[b].price) - parseFloat(dic[a].price);
    });
    for (var i = 0; i < sdic.length; i++) {
      result[sdic[i]] = this.state.showProducts[sdic[i]];
    }
    this.setState({ showProducts: result });
  }
  render() {
    const skus = Object.keys(this.state.showProducts);
    const cards = skus.map(sku => (
      <div style={{ display: "inline-block" }}>
        <Card
          style={{
            height: "20%",
            border: "none",
            width: "350px"
          }}
        >
          <Card.Img
            style={{ height: 300, border: "none", width: 250 }}
            variant="top"
            src={this.state.showProducts[sku].pic}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: 0.5 }}>
              {this.state.showProducts[sku].title}
            </Card.Title>
            <Card.Text style={{ "padding-left": "80px" }}>
              {this.state.showProducts[sku].price}$
            </Card.Text>
          </Card.Body>
          <Button
            variant="info"
            style={{ width: 250 }}
            size="xlg"
            onClick={() => {
              this.handleUserClick(this.state.showProducts[sku]);
            }}
          >
            Add to Cart
          </Button>
        </Card>
      </div>
    ));
    console.log(cards);
    return (
      <div>
        <div style={{ fontSize: 30 }}>Size</div>
        <Filter products={this.props.products} applyFilter={this.applyFilter} />
        <div style={{ fontSize: 25, color: "red" }}>
          {Object.keys(this.state.showProducts).length + " "}products found
        </div>
        <div>
          <ShoppingCart
            shoppedItem={this.state.shoppedItem}
            removeItem={this.removeItem}
          />
          <Sortby LowToHigh={this.LowToHigh} HighToLow={this.HighToLow} />
        </div>
        <p />
        {cards}
      </div>
    );
  }
}

export default App;
