const express = require('express'); // Import Express library
const cors = require('cors'); // Enable Cross-Origin Resource Sharing
const dotenv = require('dotenv'); // Load environment variables
const sequelize = require('./config/db'); // Import database configuration
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const productRoutes = require('./routes/productRoutes'); // Import product routes

dotenv.config(); // Load environment variables

const app = express(); // Create Express app

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes); // Use authentication routes
app.use('/api/products', productRoutes); // Use product routes

// Sync the database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
