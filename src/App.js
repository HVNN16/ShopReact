import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import ManuSection from './Components/Manu/ManuSection';
import Footer from './Components/Footer';
import ContactSection from './Components/Contact/ContactSection';
import Cart from './Components/Cart/Cart';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart data from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection addToCart={addToCart} />} />
        <Route path="/menu" element={<ManuSection addToCart={addToCart} />} />
        <Route path="/table" element={<ContactSection />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
