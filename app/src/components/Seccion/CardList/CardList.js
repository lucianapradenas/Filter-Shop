import React from "react";
import styles from './cardList.module.scss';
import {Card} from '../Card/Card';

export const  CardList = (props) => {
 return<div className={styles.cardList}>
     {props.products.map(product =>(
      <Card key={product.id} product={product}/>
    ))}
 </div>
};