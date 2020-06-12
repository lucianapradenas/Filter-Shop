import React from 'react';
import Header from './components/Header/Header';
import  HeaderTwo from './components/HeaderTwo/Header';
import NavBar from './components/Navbar/NavBar';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'
import Data from './data';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
    <NavBar />
    <div>
      <Header />
      <HeaderTwo/>
      <FilterableProductTable products={Data}/>
      <Footer />

   </div>
   </>
  );
}

export default App;
