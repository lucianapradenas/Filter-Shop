import React, {Component} from "react";
import {data} from './data';
import {CardList} from './CardList/CardList';

class Product extends Component {
  constructor(){
    super();
  
     this.state ={
       products:[],
       searchField:'',
     };
    }
    onSearch = e => {
      this.setState({
        searchField: e.target.value.toLowerCase()
      });
    };

      render() {
        const { products, searchField } = this.state;

        const filteredItems = products.filter(data => data.toLowerCase().includes(searchField));
        return (
      <div>
        <CardList products={data}/>
        </div>
        )
     }
    }
export default Product;