import React from 'react';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';
import style from './cardlist.module.scss';

class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
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