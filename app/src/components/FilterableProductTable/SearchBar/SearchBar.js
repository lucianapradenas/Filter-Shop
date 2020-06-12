import React from 'react';
import Style from './search.module.scss';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      //fuerzo al cliente a escribir en minuscula para validarlo en el indexOf en el mismo nivel de caracter
      let ingresar = e.target.value;
      let devolver = ingresar.toLowerCase() 
      this.props.onFilterTextChange(devolver);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Buscar Productos..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
            className={Style.input}
          />
        </form>
      );
    }
  }

  export default SearchBar;