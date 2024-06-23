import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleIncrement = (pizza) => {
        addToCart(pizza);
    };

    const handleDecrement = (pizza) => {
        updateQuantity(pizza.id, -1);
    };

    return (
        <div>
            <h1>Detalles del pedido:</h1>
            <div className="cart-list">
                {cart.map((pizza) => (
                    <div key={pizza.id} className="cart-item">
                        <img src={pizza.img} alt={pizza.name} width="50" />
                        <h4>{pizza.name}</h4>
                        <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
                        <span>${pizza.price * pizza.quantity}</span>
                        <div className="quantity-controls">
                            <button onClick={() => handleDecrement(pizza)}>-</button>
                            <span>{pizza.quantity}</span>
                            <button onClick={() => handleIncrement(pizza)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Total: ${cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)}</h2>
            <button className="checkout-button">Ir a Pagar</button>
        </div>
    );
};

export default Cart;
