import React from "react";
import styles from './card.module.scss';

export const Card =(props) => (
  <div className={styles.cardContainer}>
      <img  src={props.product.url}
            alt="Zapato"  />
      <h4>{props.product.name}</h4>
      <p> {props.product.subtitle}</p>
    </div>
)