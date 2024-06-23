import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [pizzaImages, setPizzaImages] = useState([]);

    useEffect(() => {
        fetch('/pizzas.json')
            .then(response => response.json())
            .then(data => {
                const images = data.map(pizza => pizza.img);
                setPizzaImages(images);
                setBackgroundImage(images[0]);
            })
            .catch(error => console.error('Error fetching pizzas:', error));
    }, []);

    useEffect(() => {
        if (pizzaImages.length > 0) {
            let currentIndex = 0;
            const interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % pizzaImages.length;
                setBackgroundImage(pizzaImages[currentIndex]);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [pizzaImages]);

    return (
        <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </header>
    );
};

export default Header;
