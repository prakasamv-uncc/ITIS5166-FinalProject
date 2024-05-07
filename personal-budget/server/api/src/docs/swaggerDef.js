const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Pv Personal budget API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/prakasamv-uncc/ITIS5166-FinalProject/tree/main?tab=readme-ov-file#license',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
