import React, {Component} from 'react';
import styles from './style.module.scss';
import {data} from '../Seccion/data';


class Nav extends Component {
  constructor(){
    super();
  
     this.state ={
       products:[],
       searchField:''
     };
    }
    //this.setState({products:data});
  
    onSearch = event => {
     this.setState({searchField:event.target.value });
      }

      onChange = e => {
        this.onChange = this.onChange.bind(this);
      }
  render() {
    const { products, searchField } = this.state;
    const productsFiltered = products.filter(product =>
      product.name.toLowerCase().indexOf(searchField.toLowerCase() !== -1)
    );

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
      <li className={styles.dropdown}>
        <a  className={styles.link} href="/">Contacto</a>       
      </li>
      <li>
      <form className={styles.search} > 
      <input type="search"
        name="search"
        placeholder="Buscar.."
        onChange={(e)=>this.onSearch(e)} 
        />
     </form>
    </li>

    </ul>
    </nav>
  </div>  
  );
}
}

export default Nav;
