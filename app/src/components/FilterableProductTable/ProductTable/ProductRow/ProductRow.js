import React from 'react';
import styles from './card.module.scss';
class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <div className={styles.cardContainer}>
                <img  src={product.url} alt="Zapato" />
                <h4>{product.name}</h4>
                <p> {product.subtitle}</p>
             </div>
        );
    }
}

export default ProductRow;