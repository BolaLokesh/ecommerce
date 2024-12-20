import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList'; // Import ProductList component
import UserAuth from './components/UserAuth'; // Import UserAuth component
import ShoppingCart from './components/ShoppingCart'; // Import ShoppingCart component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} /> // Route for product listing
        <Route path="/login" element={<UserAuth />} /> // Route for user authentication
        <Route path="/cart" element={<ShoppingCart />} /> // Route for shopping cart
      </Routes>
    </Router>
  );
}

export default App;
