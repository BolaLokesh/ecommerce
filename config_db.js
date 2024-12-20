const Sequelize = require('sequelize');

// MySQL connection setup
const sequelize = new Sequelize('ecommerce_db', 'root', 'yourpassword', {
  host: 'localhost',    // Database host
  dialect: 'mysql'      // Using MySQL
});

module.exports = sequelize; // Export sequelize instance for use in models
