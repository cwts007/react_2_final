import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const totalAmount = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    const totalItems = cart.reduce((acc, pizza) => acc + pizza.quantity, 0);

    return (
        <nav className="navbar">
            <div>
                <Link to="/" className="navbar-link">Pizzería Mamma Mia!</Link>
            </div>
            <div>
                <Link to="/cart" className="navbar-link">
                    <span role="img" aria-label="cart">🛒</span> ${totalAmount.toFixed(2)} ({totalItems})
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
