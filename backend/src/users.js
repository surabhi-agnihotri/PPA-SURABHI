// backend/src/users.js

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Sample user storage (can be replaced with a database)
let users = [];

// Middleware to parse JSON bodies
router.use(bodyParser.json());

// POST /api/users/signup - Create a new user
router.post('/signup', (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  // Basic validation (replace with your schema validation if using a database)
  if (!name || !email || !phoneNumber || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Example: Save user data (push to array)
  const newUser = { name, email, phoneNumber, password };
  users.push(newUser);

  // Respond with success message or user data (for demo purposes)
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

module.exports = router;
