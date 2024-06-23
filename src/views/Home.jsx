import React, { useEffect, useState } from 'react';
import PizzaCard from '../components/PizzaCard';
import './Home.css';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/pizzas.json`)
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error('Error fetching pizzas:', error));
    }, []);

    return (
        <div>
            <h1>Catálogo de Pizzas</h1>
            <div className="pizza-grid">
                {pizzas.map(pizza => (
                    <PizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default Home;
