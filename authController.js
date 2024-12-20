const jwt = require('jsonwebtoken'); // JSON Web Token library
const bcrypt = require('bcryptjs'); // Bcrypt for password comparison
const User = require('../models/user'); // User model

// Handle user login and generate JWT token
exports.login = async (req, res) => {
  const { email, password } = req.body; // Extract email and password from request body
  
  // Find user by email
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).send('User not found'); // Return error if user doesn't exist

  // Compare provided password with hashed password in the database
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials'); // Return error if passwords don't match

  // Generate JWT token with user ID, valid for 1 hour
  const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });
  res.json({ token }); // Send the token back to the client
};
