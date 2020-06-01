import React from "react";
import  styles from './Search.module.scss';

const Search = ({  onSearch}) => (
  <div>
    <form className={styles.search} > 
      <input type="search"
        name="search"
        placeholder="Buscar.."
  
        onChange={onSearch} 
        />

     </form>
  </div>
);

export default Search;
