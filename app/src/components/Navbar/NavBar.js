import React, {Component} from 'react';
import styles from './style.module.scss';
import {data} from '../Seccion/data';


class Nav extends Component {
  constructor(){
    super();
  
     this.state ={
       products:data,
       searchField:'',
     };
    }
    onSearch = event => {
     let keyword = event.target.value;
     this.setState({searchField:keyword})
      }

  render() {
    const {searchField } = this.state;
    const SearchItems = data.filter(product =>
     product.name.toLowerCase().includes(searchField.toLowerCase())
    )

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
        value={searchField}
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
