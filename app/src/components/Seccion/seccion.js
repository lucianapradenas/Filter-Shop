

import React, { Component } from "react";
import Header from './HeaderTwo/Header';
import Product from './Product';
import Footer from '../Footer/footer';

class Seccion extends Component {
 
  render() {
    return (
      <div >
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default Seccion;