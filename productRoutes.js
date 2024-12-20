const express = require('express'); // Import Express
const router = express.Router(); // Create Router instance
const { getProducts } = require('../controllers/productController'); // Import product controller

// Define the route to get all products
router.get('/', getProducts);

module.exports = router; // Export the router to use in server.js
