import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail';
import Cart from './views/Cart';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
