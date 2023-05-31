import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Header/NavBar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import SingleProduct from "./Components/Pages/SingleProduct"
import ContactUs from './Components/Pages/ContactUs';
import Products from './Components/Pages/Products';
import Login from './Components/Pages/Login';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartOpenHandler = () => {
    setIsCartOpen(true);
  }

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  }

  return (
    <Router>
      <Navbar onCartOpen={cartOpenHandler} />
      {isCartOpen && <Cart onCartClose={cartCloseHandler} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
