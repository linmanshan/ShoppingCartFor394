import React, { Component } from 'react';
import {Button,CardColumns, Card} from 'react-bootstrap'

// const App = ({products}) => {
//   const skus = Object.keys(products);
//   const items = skus.map(sku => <li>{products[sku].title}</li>);
//   return (<ul>{items}</ul>
// );


  
// };
class App extends Component{
  

  
  render(){
    const skus = Object.keys(this.props.products);
    const cards=skus.map(sku=>
      
      <Card  style={{height:"20%"}}>
        <Card.Img style={{width:'auto',height:300}} variant="top" src={this.props.products[sku].pic} />
        <Card.Body>
          <Card.Title style={{fontSize:0.5}}>{this.props.products[sku].title}</Card.Title>
          <Card.Text>
          {this.props.products[sku].price}
          </Card.Text>
        </Card.Body>
        <AddToCart/>
      </Card>
    
    )
    return <CardColumns style={{paddingLeft:230,height:"80%",columnCount:4}}>{cards}</CardColumns>
  }

}



function AddToCart(props){
return <Button style={{width:300}} size="xlg">Add to Cart</Button>

}
export default App;