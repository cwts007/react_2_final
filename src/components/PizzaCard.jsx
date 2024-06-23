import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './PizzaCard.css';

const PizzaCard = ({ pizza }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(pizza);
        }
    };

    return (
        <div className="pizza-card">
            <img src={pizza.img} alt={pizza.name} />
            <h2>
                <Link to={`/pizza/${pizza.id}`}>{pizza.name}</Link>
            </h2>
            <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
            <p>Precio: ${pizza.price}</p>
            <div className="card-footer">
                <button onClick={handleAddToCart}>Añadir al carrito</button>
                <p>Cantidad</p>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    min="1"
                />
            </div>
        </div>
    );
};

export default PizzaCard;
