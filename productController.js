const Product = require('../models/product'); // Product model

// Get all products from the database
exports.getProducts = async (req, res) => {
  const products = await Product.findAll(); // Retrieve all products
  res.json(products); // Send products to the client
};
