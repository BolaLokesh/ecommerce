const Sequelize = require('sequelize');
const sequelize = require('../config/db'); // Import database configuration

// Define Order model with fields: userId, productId, quantity, totalAmount
const Order = sequelize.define('Order', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalAmount: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Order; // Export the Order model
