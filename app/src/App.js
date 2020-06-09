import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
//import Seccion from './components/Seccion/seccion';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'
import Data from './data';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
    <NavBar />
    <div>
      <Header />
      {/*<Seccion/>*/}
      <FilterableProductTable products={Data}/>
      <Footer />

   </div>
   </>
  );
}

export default App;
