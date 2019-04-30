import React, { Component } from "react";
import { Button, CardColumns, Card } from "react-bootstrap";
import ShoppingCart from "./Components/ShoppingCart";
import Filter from "./Components/Filter";
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
    console.log(this.state.shoppedItem);
  }
  render() {
    const skus = Object.keys(this.state.showProducts);
    const cards = skus.map(sku => (
      <Card style={{ height: "20%", border: "none" }}>
        <Card.Img
          style={{ height: 300, border: "none", width: 300 }}
          variant="top"
          src={this.state.showProducts[sku].pic}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: 0.5 }}>
            {this.state.showProducts[sku].title}
          </Card.Title>
          <Card.Text>{this.state.showProducts[sku].price}</Card.Text>
        </Card.Body>
        <Button
          style={{ width: 300 }}
          size="xlg"
          onClick={() => {
            this.handleUserClick(this.state.showProducts[sku]);
          }}
        >
          Add to Cart
        </Button>
      </Card>
    ));
    return (
      <div>
        <Filter products={this.props.products} applyFilter={this.applyFilter} />
        <ShoppingCart shoppedItem={this.state.shoppedItem} />
        <CardColumns
          style={{ paddingLeft: 230, height: "80%", columnCount: 4 }}
        >
          {cards}
        </CardColumns>
      </div>
    );
  }
}

export default App;
