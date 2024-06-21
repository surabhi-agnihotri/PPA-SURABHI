// src/routes/userRoutes.js
const express = require('express');
const { signUp } = require('../controllers/userController');
const { validateSignUp } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/signup', validateSignUp, signUp);

module.exports = router;
