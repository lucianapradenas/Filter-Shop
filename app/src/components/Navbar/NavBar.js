import React, {Component} from 'react';
import styles from './style.module.scss';
import carrito from '../images/carrito.png'


class Nav extends Component {

  render() {
  
    return (
  <div className={styles.header}>
  <h1>Emma<a className={styles.title}>Shoes</a></h1> 
    <nav>
    <ul>
      <li>
        <a className={styles.link} href="/">Inicio</a>
      </li>
      <li>
        <a className={styles.link} href="/">Productos</a>        
      </li>
      <li>
        <a className={styles.link} href="/">Quienes Somos</a>        
      </li>
      <li className={styles.dropdown}>
        <a  className={styles.link} href="/">Contacto</a>       
      </li>
      <li>
     <img src={carrito} alt="carrito de compras" className={styles.carrito}/>
    </li>
    </ul>
    </nav>
  </div>  
  );
}
}

export default Nav;
