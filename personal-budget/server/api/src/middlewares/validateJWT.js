const config = require('../config/config');
const exjwt = require('express-jwt');
const jwtMW = exjwt.expressjwt({
  secret: config.jwt.secret,
  algorithms: ['HS256']
});

module.exports = jwtMW;
