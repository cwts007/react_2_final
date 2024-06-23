import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './PizzaDetail.css';

const PizzaDetail = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch('/pizzas.json')
            .then(response => response.json())
            .then(data => {
                const selectedPizza = data.find(pizza => pizza.id === id);
                setPizza(selectedPizza);
            })
            .catch(error => console.error('Error fetching pizza details:', error));
    }, [id]);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(pizza);
        }
    };

    if (!pizza) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="pizza-detail">
            <div className="pizza-image-container">
                <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            </div>
            <div className="pizza-info">
                <h1>{pizza.name}</h1>
                <p>{pizza.desc}</p>
                <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
                <p>Precio: ${pizza.price}</p>
                <div className="quantity-controls">
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        min="1"
                    />
                    <button onClick={handleAddToCart}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaDetail;
