import React, {Component} from "react";
import {data} from './data';
import {CardList} from './CardList/CardList';

const Product = () => (
  <div>
   <CardList products={data} />
  </div>
);

export default Product;
