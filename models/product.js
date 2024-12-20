const Sequelize = require('sequelize');
const sequelize = require('../config/db'); // Import database configuration

// Define Product model with fields: name, description, price, stock
const Product = sequelize.define('Product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Product; // Export the Product model
