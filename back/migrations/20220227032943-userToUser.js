'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameTable('users', 'Users');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameTable('Users', 'users');
  },
};
