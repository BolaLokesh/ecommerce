const Sequelize = require('sequelize');
const sequelize = require('../config/db'); // Import database configuration
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// Define User model with fields: username, email, password
const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true // Email must be unique for each user
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Hook to hash password before saving the user record
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10); // Hash password before saving
});

module.exports = User; // Export the User model
