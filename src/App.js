import React, { useState } from 'react';
import './App.css';

import Header from "./Components/Header/Header"
import Items from './Components/Body/Items';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartOpenHandler = () => {
    setIsCartOpen(true);
  }

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  }


  return (
    <>
      {isCartOpen && <Cart onCartClose={cartCloseHandler} />}
      <Header onCartOpen={cartOpenHandler} />
      <Items />
      <Footer />
    </>
  );
}

export default App;
