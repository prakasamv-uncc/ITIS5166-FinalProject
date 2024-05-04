// Desc: Middleware to validate the token
const jwt  = require('jsonwebtoken');
const config = require('../config/config');

// Define a middleware function that validates the JWT token
const validateToken = async (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.headers['authorization'];

  // If the token is not present, return an error
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  // Verify the token using the secret key
  try {
    const decodedToken = await jwt.verify(token, 'secret');
    // If the token is valid, set the user property on the request object
    req.user = decodedToken;
    next();
  } catch (error) {
    // If the token is invalid, return an error
    return res.status(401).send('Unauthorized');
  }
};


module.exports = validateToken;
