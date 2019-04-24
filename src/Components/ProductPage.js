import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import ShoppingCart from "./ShoppingCart";

class ProductPage extends Component {
  constructor(props){
    super(props);
    this.state={
      Products:[
      require('../Images/p1.jpg'),require('../Images/p2.jpg'),require('../Images/p3.jpg'),
      require('../Images/p4.jpg'),require('../Images/p5.jpg'),require('../Images/p6.jpg'),
      require('../Images/p7.jpg'),require('../Images/p8.jpg'),require('../Images/p9.jpg')
    ],
      Prices:[10.90,21.20,10.50,4.99,5.99,6.68,7.80,8.47,9.99],
      Names:['Edifier','Mutimeida','JBL','Logitech','Anker','OontAngle','Polk Audio','Bose','Z623'],
      match:[]
      

    }

  }
  handleUserClick(i){
    let temp=this.state.match
    temp.push(i)
    this.setState({match:temp})
  }

  renderProducts(match){
    return(

      <div>
            {match.map((product, id) => {
          return (
            <div key={id}>
              <img src={this.state.Products[id]}/>
              <div style={{fontSize:100}}>{this.state.Names[id]}</div>
              <div>{this.state.Prices[id]}</div>
              <Button style={{width:350}}variant="primary" size="xlg" onClick={()=> this.handleUserClick(id)}>Add to Cart</Button>
              
            </div>
          );
        })}
    </div>
    )
  }
  render() {
    return (
        <div>
         {/* <img src={this.state.Products[0]} /> */}
          {this.renderProducts(this.state.Products)}
        </div>
    );
  }
}

export default ProductPage;