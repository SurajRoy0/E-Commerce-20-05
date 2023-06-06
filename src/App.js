import React, { useState, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './App.module.css';
import loader from "./Assets/Loader.gif"
import AuthContext from './Store/auth-context';

const Footer = lazy(() => import('./Components/Footer/Footer'));
const Cart = lazy(() => import('./Components/Cart/Cart'));
const Navbar = lazy(() => import('./Components/Header/NavBar'));
const Home = lazy(() => import('./Components/Pages/Home'));
const About = lazy(() => import('./Components/Pages/About'));
const SingleProduct = lazy(() => import('./Components/Pages/SingleProduct'));
const ContactUs = lazy(() => import('./Components/Pages/ContactUs'));
const Products = lazy(() => import('./Components/Pages/Products'));
const Login = lazy(() => import('./Components/Pages/Login'));



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext)
  const cartOpenHandler = () => {
    setIsCartOpen(true);
  }

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  }

  return (
    <Suspense fallback={<div className={styles['lazy-loader']}><img src={loader} className={styles['lazy-loader__img']} alt='Loader' /></div>} >

      <Router>
        <Navbar onCartOpen={cartOpenHandler} />
        {isCartOpen && <Cart onCartClose={cartCloseHandler} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {isLoggedIn && <Route path="/products" element={<Products />} />}
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
