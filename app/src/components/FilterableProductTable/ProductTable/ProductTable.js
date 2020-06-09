import React from 'react';
//import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';
import style from './cardlist.module.scss';

class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
  
      const rows = [];
  
      this.props.products.forEach((product) => {
        //fuerzo a que la cadena de caracteres sean minusculas para mostrarlos
        if (product.name.toLowerCase().indexOf(filterText) === -1) {
          return;
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
      });
  
      return (
        <div className={style.cardList}>{rows}</div>
      );
    }
  }

  export default ProductTable;