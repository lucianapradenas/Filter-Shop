import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Seccion from './components/Seccion/seccion';
function App() {
  return (
    <>
    <NavBar />
    <div>
      <Header />
      <Seccion/>
   </div>
   </>
  );
}

export default App;
