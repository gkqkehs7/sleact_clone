require('dotenv').config();
module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'sleact_clone',
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      options: {
        encrypt: false,
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
    host: '15.164.103.236',
    dialect: 'mysql',
  },
};
