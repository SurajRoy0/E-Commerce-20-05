import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CartProvider from './Store/CartProvider';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Header/NavBar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ContactUs from './Components/Pages/ContactUs';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartOpenHandler = () => {
    setIsCartOpen(true);
  }

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  }

  return (
    <CartProvider>
      <Router>
        <Navbar onCartOpen={cartOpenHandler} />
        {isCartOpen && <Cart onCartClose={cartCloseHandler} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
