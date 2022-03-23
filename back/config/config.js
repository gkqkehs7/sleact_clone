require('dotenv').config();
module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'sleact_clone',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      options: {
        requestTimeout: 3000,
      },
    },
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'sleact_clone',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      options: {
        requestTimeout: 3000,
      },
    },
  },
};
