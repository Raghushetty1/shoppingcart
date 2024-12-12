// src/App.js
import React, { useState } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    // Check if product already exists in the cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if product already exists in cart
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1 className='name'>Shopping Cart App</h1>
        <p className='cart'>Items in Cart: {cart.length}</p>
      </header>
      <div className="content">
        <Home addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
