import React from "react";
import  styles from './Search.module.scss';

const Search = ({onSearch}) => (
  <div>
    <form className={styles.search} > 
      <input type="search"
        name="search"
        placeholder="Buscar.."
      onChange={(e)=>this.searchSpace(e)} 
        />

     </form>
  </div>
);

export default Search;
