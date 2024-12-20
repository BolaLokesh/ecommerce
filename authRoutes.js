const express = require('express'); // Import Express
const router = express.Router(); // Create Router instance
const { login } = require('../controllers/authController'); // Import login controller

// Define the login route
router.post('/login', login);

module.exports = router; // Export the router to use in server.js
